/**
 * Products Module
 * Handles loading, filtering, and displaying products
 */

const Products = {
    data: {
        "products": [
            {
                "id": "tc-001",
                "name": "Classic Oxford Shirt",
                "sku": "TC-001",
                "price": 2499,
                "originalPrice": 2999,
                "category": "shirts",
                "sizes": ["S", "M", "L", "XL", "XXL"],
                "colors": ["White", "Light Blue", "Navy"],
                "images": ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80"],
                "description": "Premium cotton oxford shirt with a timeless design. Perfect for both formal and casual occasions. Features a button-down collar and a relaxed fit.",
                "material": "100% Premium Cotton",
                "featured": true,
                "isNew": true,
                "inStock": true
            },
            {
                "id": "tc-002",
                "name": "Slim Fit Chinos",
                "sku": "TC-002",
                "price": 2299,
                "originalPrice": null,
                "category": "pants",
                "sizes": ["28", "30", "32", "34", "36"],
                "colors": ["Khaki", "Navy", "Olive", "Black"],
                "images": ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&q=80"],
                "description": "Modern slim fit chinos crafted from stretch cotton twill. Comfortable for all-day wear with a clean, tailored look.",
                "material": "98% Cotton, 2% Elastane",
                "featured": true,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-003",
                "name": "Premium Polo Shirt",
                "sku": "TC-003",
                "price": 1899,
                "originalPrice": 2199,
                "category": "shirts",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Black", "White", "Navy", "Burgundy"],
                "images": ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&q=80"],
                "description": "Classic piqué polo shirt with a refined fit. Features ribbed collar and cuffs with a subtle logo embroidery.",
                "material": "100% Cotton Piqué",
                "featured": true,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-004",
                "name": "Casual Linen Shirt",
                "sku": "TC-004",
                "price": 2799,
                "originalPrice": null,
                "category": "shirts",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["White", "Beige", "Light Blue"],
                "images": ["https://images.unsplash.com/photo-1598911510795-75a44e13653e?w=900&q=80"],
                "description": "Breathable linen shirt perfect for warm weather. Features a relaxed fit and natural texture.",
                "material": "100% Pure Linen",
                "featured": false,
                "isNew": true,
                "inStock": true
            },
            {
                "id": "tc-005",
                "name": "Tailored Blazer",
                "sku": "TC-005",
                "price": 6999,
                "originalPrice": 7999,
                "category": "jackets",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Charcoal", "Navy", "Black"],
                "images": ["https://images.unsplash.com/photo-1594938298603-c8148c47e356?w=900&q=80"],
                "description": "Sophisticated single-breasted blazer with a modern slim fit. Perfect for business meetings or smart casual occasions.",
                "material": "65% Polyester, 35% Viscose",
                "featured": true,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-006",
                "name": "Cotton Crew Neck Tee",
                "sku": "TC-006",
                "price": 999,
                "originalPrice": null,
                "category": "t-shirts",
                "sizes": ["S", "M", "L", "XL", "XXL"],
                "colors": ["White", "Black", "Heather Gray", "Navy"],
                "images": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80"],
                "description": "Essential crew neck t-shirt made from premium cotton. Soft, comfortable, and perfect for everyday wear.",
                "material": "100% Combed Cotton",
                "featured": false,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-007",
                "name": "Denim Jacket",
                "sku": "TC-007",
                "price": 4499,
                "originalPrice": 4999,
                "category": "jackets",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Light Wash", "Dark Wash", "Black"],
                "images": ["https://images.unsplash.com/photo-1576905341235-905187768565?w=900&q=80"],
                "description": "Classic denim jacket with a modern fit. Features traditional button closure and chest pockets.",
                "material": "100% Cotton Denim",
                "featured": true,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-008",
                "name": "Formal Dress Shirt",
                "sku": "TC-008",
                "price": 2999,
                "originalPrice": null,
                "category": "shirts",
                "sizes": ["S", "M", "L", "XL", "XXL"],
                "colors": ["White", "Light Blue", "Pink"],
                "images": ["https://images.unsplash.com/photo-1603251578711-3290ae1a444e?w=900&q=80"],
                "description": "Crisp formal dress shirt with a spread collar. Perfect for business and formal occasions.",
                "material": "100% Egyptian Cotton",
                "featured": false,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-009",
                "name": "Jogger Pants",
                "sku": "TC-009",
                "price": 1799,
                "originalPrice": 1999,
                "category": "pants",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Black", "Gray", "Navy"],
                "images": ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900&q=80"],
                "description": "Comfortable jogger pants with tapered leg and elastic cuffs. Perfect for casual outings and travel.",
                "material": "80% Cotton, 20% Polyester",
                "featured": false,
                "isNew": true,
                "inStock": true
            },
            {
                "id": "tc-010",
                "name": "Wool Blend Sweater",
                "sku": "TC-010",
                "price": 3499,
                "originalPrice": null,
                "category": "sweaters",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Charcoal", "Navy", "Burgundy", "Camel"],
                "images": ["https://images.unsplash.com/photo-1614676466623-f8d20c778447?w=900&q=80"],
                "description": "Luxurious wool blend sweater with a classic crew neck. Soft, warm, and perfect for layering.",
                "material": "50% Wool, 50% Acrylic",
                "featured": true,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-011",
                "name": "Cargo Shorts",
                "sku": "TC-011",
                "price": 1599,
                "originalPrice": null,
                "category": "shorts",
                "sizes": ["28", "30", "32", "34", "36"],
                "colors": ["Khaki", "Olive", "Navy"],
                "images": ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&q=80"],
                "description": "Versatile cargo shorts with multiple pockets. Perfect for outdoor activities and casual summer days.",
                "material": "100% Cotton Twill",
                "featured": false,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-012",
                "name": "Henley Long Sleeve",
                "sku": "TC-012",
                "price": 1499,
                "originalPrice": 1799,
                "category": "t-shirts",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["White", "Charcoal", "Olive", "Burgundy"],
                "images": ["https://images.unsplash.com/photo-1626497746870-174823863a8a?w=900&q=80"],
                "description": "Classic henley with a three-button placket. Comfortable and stylish for casual wear.",
                "material": "100% Cotton Jersey",
                "featured": false,
                "isNew": false,
                "inStock": true
            },
            {
                "id": "tc-013",
                "name": "Oversized Graphic Tee",
                "sku": "TC-013",
                "price": 1299,
                "originalPrice": 1599,
                "category": "t-shirts",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Black", "White"],
                "images": ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80"],
                "description": "Streetwear essential oversized tee with bold back print. Made from heavyweight cotton for structure and durability.",
                "material": "100% Heavyweight Cotton",
                "featured": true,
                "isNew": true,
                "inStock": true
            },
            {
                "id": "tc-014",
                "name": "Linen Drawstring Trousers",
                "sku": "TC-014",
                "price": 2599,
                "originalPrice": 2999,
                "category": "pants",
                "sizes": ["28", "30", "32", "34", "36"],
                "colors": ["Beige", "Olive", "Navy"],
                "images": ["https://images.unsplash.com/photo-1517445312882-6e279b908479?w=900&q=80"],
                "description": "Relaxed fit linen trousers with a drawstring waist. Lightweight and airy, ideal for hot summer days.",
                "material": "100% Linen",
                "featured": true,
                "isNew": true,
                "inStock": true
            },
            {
                "id": "tc-015",
                "name": "Structured Overshirt",
                "sku": "TC-015",
                "price": 3299,
                "originalPrice": null,
                "category": "jackets",
                "sizes": ["S", "M", "L", "XL"],
                "colors": ["Khaki", "Black"],
                "images": ["https://images.unsplash.com/photo-1520975954732-35dd22299614?w=900&q=80"],
                "description": "Heavyweight cotton overshirt with dual chest pockets. Can be worn as a light jacket or layered shirt.",
                "material": "100% Cotton Twill",
                "featured": false,
                "isNew": true,
                "inStock": true
            }
        ],
        "categories": [
            { "id": "shirts", "name": "Shirts", "image": "category-shirts.jpg" },
            { "id": "t-shirts", "name": "T-Shirts", "image": "category-tshirts.jpg" },
            { "id": "pants", "name": "Pants", "image": "category-pants.jpg" },
            { "id": "jackets", "name": "Jackets", "image": "category-jackets.jpg" },
            { "id": "sweaters", "name": "Sweaters", "image": "category-sweaters.jpg" },
            { "id": "shorts", "name": "Shorts", "image": "category-shorts.jpg" }
        ],
        "shipping": {
            "rates": [
                { "id": "standard", "name": "Standard Shipping", "price": 150, "days": "5-7 business days", "freeOver": 3000 },
                { "id": "express", "name": "Express Shipping", "price": 350, "days": "2-3 business days", "freeOver": null }
            ],
            "freeThreshold": 3000
        },
        "store": {
            "name": "HANGGER",
            "description": "Men's clothing store",
            "tagline": "Fast Local Shipping 🚚",
            "phone": "+977 9800596635",
            "whatsapp": "9800596635",
            "viber": "9800596635",
            "locationInquiries": "9741877230",
            "instagram": "_trendycorner3",
            "email": "info@trendycorner.com",
            "address": "Birendranagar, Surkhet, Nepal"
        }
    },
    loaded: true,

    async load() {
        console.log('Products.load - Attempting to load products...');
        try {
            // Try to load from JSON file first
            const response = await fetch('data/products.json');
            if (response.ok) {
                const jsonData = await response.json();
                if (jsonData && jsonData.products) {
                    this.data = jsonData;
                    this.loaded = true;
                    console.log('Products.load - Data loaded from JSON file');
                    return this.data;
                }
            }
        } catch (e) {
            console.warn('Products.load - Could not load products.json (likely file:// protocol). Using hardcoded data.');
        }

        // Fallback to hardcoded data is automatic since this.data is already populated
        this.loaded = true;
        console.log('Products.load - Using hardcoded data');
        return this.data;
    },

    /**
     * Get all products
     * @returns {Array}
     */
    getAll() {
        if (!this.data || !this.data.products) {
            console.warn('Products.getAll - No data found!');
            return [];
        }
        return this.data.products;
    },

    /**
     * Get product by ID
     * @param {string} id
     * @returns {Object|null}
     */
    getById(id) {
        if (!id) return null;
        const products = this.getAll();
        return products.find(p => p.id === id) || null;
    },

    /**
     * Get featured products
     * @param {number} limit
     * @returns {Array}
     */
    getFeatured(limit = 8) {
        return this.getAll()
            .filter(p => p.featured)
            .slice(0, limit);
    },

    /**
     * Get new arrivals
     * @param {number} limit
     * @returns {Array}
     */
    getNewArrivals(limit = 8) {
        return this.getAll()
            .filter(p => p.isNew)
            .slice(0, limit);
    },

    /**
     * Get products by category
     * @param {string} category
     * @returns {Array}
     */
    getByCategory(category) {
        if (!category || category === 'all') {
            return this.getAll();
        }
        return this.getAll().filter(p => p.category === category);
    },

    /**
     * Search products
     * @param {string} query
     * @returns {Array}
     */
    search(query) {
        if (!query) return this.getAll();

        const q = query.toLowerCase();
        return this.getAll().filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    },

    /**
     * Sort products
     * @param {Array} products
     * @param {string} sortBy
     * @returns {Array}
     */
    sort(products, sortBy) {
        const sorted = [...products];

        switch (sortBy) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            default: // featured
                sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return sorted;
    },

    /**
     * Get all categories
     * @returns {Array}
     */
    getCategories() {
        return this.data?.categories || [];
    },

    /**
     * Get store info
     * @returns {Object}
     */
    getStoreInfo() {
        return this.data?.store || {};
    },

    /**
     * Get shipping rates
     * @returns {Object}
     */
    getShippingRates() {
        return this.data?.shipping || {};
    },

    /**
     * Format price
     * @param {number} price
     * @returns {string}
     */
    formatPrice(price) {
        return `Rs. ${price.toLocaleString()}`;
    },

    /**
     * Generate product card HTML
     * @param {Object} product
     * @param {number} index
     * @returns {string}
     */
    renderCard(product, index = 0) {
        const discount = product.originalPrice
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;

        const imageSrc = (product.images && product.images[0]) || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800';
        const delay = index * 0.05;

        return `
            <article class="product-card animate-fade-up" data-product-id="${product.id}" style="animation-delay: ${delay}s">
                <a href="product.html?id=${product.id}" class="product-image-wrapper">
                    <div class="product-image-inner">
                        <img src="${imageSrc}" alt="${product.name}" loading="lazy" class="product-main-image">
                    </div>
                    <div class="product-badges">
                        ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
                        ${discount > 0 ? `<span class="badge badge-sale">${discount}% Off</span>` : ''}
                    </div>
                    <div class="product-overlay">
                        <button class="btn-quick-add" onclick="event.preventDefault();Products.quickAdd('${product.id}')">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            <span>Quick Add</span>
                        </button>
                    </div>
                </a>
                <div class="product-info">
                    <div class="product-info-top">
                        <span class="product-category">${product.category}</span>
                    </div>
                    <h3 class="product-name">
                        <a href="product.html?id=${product.id}">${product.name}</a>
                    </h3>
                    <div class="product-price">
                        <span class="product-price-current">${this.formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="product-price-old">${this.formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    <div class="product-colors">
                        ${product.colors.slice(0, 3).map(color => `
                            <span class="color-dot" style="background-color: ${this.getColorHex(color)}" title="${color}"></span>
                        `).join('')}
                        ${product.colors.length > 3 ? `<span class="color-more">+${product.colors.length - 3}</span>` : ''}
                    </div>
                </div>
            </article>
        `;
    },

    /**
     * Get hex color value from color name
     * @param {string} colorName
     * @returns {string}
     */
    getColorHex(colorName) {
        const colors = {
            'White': '#ffffff',
            'Black': '#000000',
            'Navy': '#1e3a5f',
            'Light Blue': '#add8e6',
            'Charcoal': '#2d2d2d',
            'Khaki': '#c3b091',
            'Olive': '#556b2f',
            'Burgundy': '#800020',
            'Beige': '#f5f5dc',
            'Gray': '#808080',
            'Heather Gray': '#9e9e9e',
            'Pink': '#ffc0cb',
            'Camel': '#c19a6b',
            'Light Wash': '#b0c4de',
            'Dark Wash': '#1c3d5a'
        };
        return colors[colorName] || '#cccccc';
    },

    /**
     * Quick add to cart (first size/color)
     * @param {string} productId
     */
    quickAdd(productId) {
        const product = this.getById(productId);
        if (!product) return;

        const size = product.sizes[0];
        const color = product.colors[0];
        Cart.addItem(product, size, color, 1);
    },

    /**
     * Render products grid
     * @param {string} containerId
     * @param {Array} products
     */
    renderGrid(containerId, products) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (products.length === 0) {
            container.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:4rem 1rem;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" style="margin:0 auto 1rem;">
                        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <h3 style="font-size:1.25rem;color:#1a1a1a;margin-bottom:0.5rem;">No products found</h3>
                    <p style="color:#6b7280;">Try adjusting your filters or search terms.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = products.map((p, i) => this.renderCard(p, i)).join('');
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Products;
}
