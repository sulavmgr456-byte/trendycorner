/**
 * App Main Module
 * Main application initialization and utilities
 */

const App = {
    /**
     * Initialize application
     */
    async init() {
        console.log('HANGGER - Initializing...');

        try {
            // Load products data
            await Products.load();

            // Initialize other components
            if (typeof Cart !== 'undefined' && Cart.init) {
                Cart.init();
            }

            // Initialize UI elements
            this.initHeaderScroll();
            this.initMobileMenu();
            this.initPage();

            console.log('HANGGER - Ready!');
        } catch (error) {
            console.error('HANGGER - Initialization failed:', error);
        }
    },

    /**
     * Initialize header scroll effect
     */
    initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    },

    /**
     * Initialize mobile menu
     */
    initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu');
        const backdrop = menu?.querySelector('.mobile-menu-backdrop');

        if (!menuBtn || !menu) return;

        menuBtn.addEventListener('click', () => {
            menu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            menu.classList.remove('open');
            document.body.style.overflow = '';
        };

        closeBtn?.addEventListener('click', closeMenu);
        backdrop?.addEventListener('click', closeMenu);

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('open')) {
                closeMenu();
            }
        });
    },

    /**
     * Initialize page-specific features
     */
    initPage() {
        const page = document.body.dataset.page;

        switch (page) {
            case 'home':
                this.initHomePage();
                break;
            case 'shop':
                this.initShopPage();
                break;
            case 'product':
                this.initProductPage();
                break;
            case 'cart':
                Cart.renderCartPage();
                break;
            case 'checkout':
                Checkout.init();
                break;
        }
    },

    /**
     * Initialize home page
     */
    initHomePage() {
        // Render featured products
        const featured = Products.getFeatured(8);
        Products.renderGrid('featured-products', featured);

        // Render categories
        this.renderCategories();
    },

    /**
     * Render category cards
     */
    renderCategories() {
        const container = document.getElementById('category-cards');
        if (!container) return;

        const categories = Products.getCategories();

        container.innerHTML = categories.slice(0, 4).map((cat, i) => `
            <a href="shop.html?category=${cat.id}" class="card animate-on-scroll" data-animation="fade-up" style="animation-delay:${i * 0.1}s">
                <div class="card-image" style="aspect-ratio:1/1;">
                    <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a1a1a,#2d2d2d);display:flex;align-items:center;justify-content:center;">
                        <span style="color:#F5C842;font-size:1.5rem;font-weight:700;">${cat.name}</span>
                    </div>
                </div>
            </a>
        `).join('');
    },

    /**
     * Initialize shop page
     */
    initShopPage() {
        // Get URL params
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') || 'all';
        const search = params.get('search') || '';

        // Set initial filter values
        const categorySelect = document.getElementById('category-filter');
        const searchInput = document.getElementById('search-input');

        if (categorySelect) categorySelect.value = category;
        if (searchInput) searchInput.value = search;

        // Render products
        this.filterProducts();

        // Bind filter events
        categorySelect?.addEventListener('change', () => this.filterProducts());

        const sizeFilter = document.getElementById('size-filter');
        sizeFilter?.addEventListener('change', () => this.filterProducts());

        const colorFilter = document.getElementById('color-filter');
        colorFilter?.addEventListener('change', () => this.filterProducts());

        searchInput?.addEventListener('input', debounce(() => this.filterProducts(), 300));
        document.getElementById('sort-select')?.addEventListener('change', () => this.filterProducts());
    },

    /**
     * Filter and render products on shop page
     */
    filterProducts() {
        const category = document.getElementById('category-filter')?.value || 'all';
        const search = document.getElementById('search-input')?.value || '';
        const sort = document.getElementById('sort-select')?.value || 'featured';

        let products = Products.getByCategory(category);

        if (search) {
            const q = search.toLowerCase();
            products = products.filter(p =>
                (p.name && p.name.toLowerCase().includes(q)) ||
                (p.description && p.description.toLowerCase().includes(q)) ||
                (p.category && p.category.toLowerCase().includes(q))
            );
        }

        // Apply Size and Color filters if they exist
        const size = document.getElementById('size-filter')?.value || 'all';
        const color = document.getElementById('color-filter')?.value || 'all';

        if (size !== 'all') {
            products = products.filter(p => p.sizes && p.sizes.includes(size));
        }

        if (color !== 'all') {
            products = products.filter(p => p.colors && p.colors.includes(color));
        }

        products = Products.sort(products, sort);

        Products.renderGrid('products-grid', products);

        // Update count
        const countEl = document.getElementById('product-count');
        if (countEl) countEl.textContent = `${products.length} products`;
    },

    /**
     * Initialize product detail page
     */
    initProductPage() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');

        if (!productId) {
            window.location.href = 'shop.html';
            return;
        }

        const product = Products.getById(productId);

        if (!product) {
            this.showProductNotFound();
            return;
        }

        try {
            this.renderProductDetail(product);
        } catch (e) {
            console.error('Error rendering product detail:', e);
            this.showProductNotFound();
        }
    },

    /**
     * Show product not found message
     */
    showProductNotFound() {
        const container = document.getElementById('product-detail');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center py-20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-6 text-gray-300">
                    <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <h2 class="text-display-md mb-4">Product Not Found</h2>
                <p class="text-gray-500 mb-8 max-w-md mx-auto">The product you're looking for doesn't exist or may have been moved.</p>
                <a href="shop.html" class="btn btn-primary btn-lg">Browse Products</a>
            </div>
        `;
    },

    /**
     * Render product detail
     * @param {Object} product
     */
    renderProductDetail(product) {
        const container = document.getElementById('product-detail');
        if (!container) return;

        // Use images array from data
        const productImages = product.images || [];

        // Variable placeholder images based on category to make it look real
        const getPlaceholder = (cat) => {
            const map = {
                'shirts': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200',
                'pants': 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1200',
                't-shirts': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200',
                'jackets': 'https://images.unsplash.com/photo-1551028919-00167139da80?w=1200',
                'accessories': 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200'
            };
            return map[cat] || 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200';
        };

        const imageSrc = productImages[0] || getPlaceholder(product.category);

        // Prepare gallery images (at least 4)
        const galleryImages = [...productImages];
        while (galleryImages.length < 4) {
            galleryImages.push(imageSrc);
        }

        container.innerHTML = `
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <!-- Image Gallery -->
                <div class="space-y-4 animate-fade-up sticky top-24">
                    <div class="product-image-wrapper aspect-[3/4] bg-gray-100 overflow-hidden relative group">
                        <img src="${imageSrc}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" id="main-product-image">
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        ${galleryImages.slice(0, 4).map((src, i) => `
                            <div class="aspect-square bg-gray-100 cursor-pointer overflow-hidden border border-transparent hover:border-black transition-colors" onclick="document.getElementById('main-product-image').src = '${src}'">
                                <img src="${src}" class="w-full h-full object-cover">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Product Info -->
                <div class="animate-fade-up" style="animation-delay: 0.1s;">
                    <nav class="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 mb-8">
                        <a href="Home.html" class="hover:text-black transition-colors">Home</a>
                        <span>/</span>
                        <a href="shop.html" class="hover:text-black transition-colors">Shop</a>
                        <span>/</span>
                        <span class="text-black">${product.name}</span>
                    </nav>

                    <h1 class="text-display-lg mb-4 leading-[0.9]">${product.name}</h1>
                    
                    <div class="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                        <div class="flex items-baseline gap-3">
                            <span class="text-2xl font-bold">Rs. ${product.price.toLocaleString()}</span>
                            ${product.originalPrice ? `<span class="text-lg text-gray-400 line-through">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                        ${product.isNew ? '<span class="badge badge-new">New Season</span>' : ''}
                    </div>

                    <p class="text-gray-600 text-lg leading-relaxed mb-10 font-light">${product.description}</p>

                    <div class="space-y-8 mb-10">
                        <!-- Color Selection -->
                        <div>
                            <label class="section-label block mb-4">Color: <span id="selected-color" class="text-black font-bold">${product.colors[0]}</span></label>
                            <div class="flex flex-wrap gap-4" id="color-options">
                                ${product.colors.map((color, i) => `
                                    <button class="w-12 h-12 rounded-full border border-gray-200 p-1 transition-all hover:scale-105 ${i === 0 ? 'ring-1 ring-black ring-offset-2' : ''}" 
                                        onclick="App.selectColor(this, '${color}')" 
                                        title="${color}">
                                        <div class="w-full h-full rounded-full border border-black/10" style="background-color: ${Products.getColorHex(color)}"></div>
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Size Selection -->
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <label class="section-label block mb-0">Select Size</label>
                                <button class="text-[0.65rem] font-bold uppercase tracking-widest underline hover:text-gray-500">Size Guide</button>
                            </div>
                            <div class="grid grid-cols-5 gap-2" id="size-options">
                                ${product.sizes.map((size, i) => `
                                    <button class="h-12 border border-gray-200 font-bold text-sm hover:border-black transition-all ${i === 0 ? 'bg-black text-white border-black' : 'bg-white text-black'}" 
                                        onclick="App.selectSize(this, '${size}')" data-size="${size}">
                                        ${size}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Quantity -->
                        <div>
                            <label class="section-label block mb-4">Quantity</label>
                            <div class="quantity-control w-32">
                                <button class="quantity-btn" onclick="App.updateProductQty(-1)">−</button>
                                <span class="quantity-value text-lg" id="product-qty">1</span>
                                <button class="quantity-btn" onclick="App.updateProductQty(1)">+</button>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-primary btn-lg w-full py-5 text-sm tracking-[0.2em]" onclick="App.addProductToCart('${product.id}')">
                        ADD TO SHOPPING BAG
                    </button>

                    <!-- Value Props -->
                    <div class="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 mt-10">
                        <div class="bg-gray-50 p-6 text-center group hover:bg-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-3">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            <div class="text-[0.65rem] font-bold uppercase tracking-widest mb-1">Free Delivery</div>
                            <div class="text-[0.6rem] text-gray-400 uppercase tracking-wider">Orders > Rs. 3k</div>
                        </div>
                        <div class="bg-gray-50 p-6 text-center group hover:bg-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-3">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            </svg>
                            <div class="text-[0.65rem] font-bold uppercase tracking-widest mb-1">Easy Returns</div>
                            <div class="text-[0.6rem] text-gray-400 uppercase tracking-wider">Within 7 Days</div>
                        </div>
                    </div>
                    
                    <!-- Accordion Details -->
                    <div class="mt-8 border-t border-gray-200">
                         <div class="py-4 border-b border-gray-200">
                            <h4 class="text-sm font-bold uppercase tracking-widest mb-2">Details & Material</h4>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Material: ${product.material || 'Premium Cotton Mixture'}<br>
                                SKU: ${product.sku || 'N/A'}<br>
                                Care: Machine wash cold, dry flat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Store current product for add to cart
        this.currentProduct = product;
        this.selectedSize = product.sizes[0];
        this.selectedColor = product.colors[0];
        this.productQty = 1;
    },

    // Product page state (defaults)
    currentProduct: null,
    selectedSize: null,
    selectedColor: null,
    productQty: 1,

    /**
     * Select size
     */
    selectSize(btn, size) {
        document.querySelectorAll('#size-options button').forEach(b => {
            b.classList.remove('bg-black', 'text-white', 'border-black');
            b.classList.add('bg-white', 'text-black', 'border-gray-200');
        });
        btn.classList.remove('bg-white', 'text-black', 'border-gray-200');
        btn.classList.add('bg-black', 'text-white', 'border-black');
        this.selectedSize = size;
    },

    /**
     * Select color
     */
    selectColor(btn, color) {
        document.querySelectorAll('#color-options button').forEach(b => {
            b.classList.remove('ring-1', 'ring-black', 'ring-offset-2');
        });
        btn.classList.add('ring-1', 'ring-black', 'ring-offset-2');
        this.selectedColor = color;
        const colorDisplay = document.getElementById('selected-color');
        if (colorDisplay) colorDisplay.textContent = color;
    },

    /**
     * Update product quantity
     */
    updateProductQty(delta) {
        this.productQty = Math.max(1, this.productQty + delta);
        const qtyDisplay = document.getElementById('product-qty');
        if (qtyDisplay) qtyDisplay.textContent = this.productQty;
    },

    /**
     * Add product to cart
     */
    addProductToCart(productId) {
        const product = Products.getById(productId);
        if (!product) return;

        Cart.addItem(product, this.selectedSize, this.selectedColor, this.productQty);

        // Animate button
        if (typeof Animations !== 'undefined' && Animations.animateAddToCart && event) {
            const btn = event.target.closest('button');
            if (btn) Animations.animateAddToCart(btn);
        }
    }
};

/**
 * Debounce utility
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize app on DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
