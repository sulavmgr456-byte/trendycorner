/**
 * Cart Management Module
 * Handles cart operations with localStorage persistence
 */

const Cart = {
    STORAGE_KEY: 'trendycorner_cart',

    // Cart state
    items: [],

    /**
     * Initialize cart from localStorage
     */
    init() {
        this.load();
        this.updateUI();
        console.log('Cart initialized:', this.items);
    },

    /**
     * Load cart from localStorage
     */
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            this.items = saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Error loading cart:', e);
            this.items = [];
        }
    },

    /**
     * Save cart to localStorage
     */
    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
        } catch (e) {
            console.error('Error saving cart:', e);
        }
    },

    /**
     * Add item to cart
     * @param {Object} product - Product object
     * @param {string} size - Selected size
     * @param {string} color - Selected color
     * @param {number} qty - Quantity to add
     */
    addItem(product, size, color, qty = 1) {
        // Check if item already exists with same size/color
        const existingIndex = this.items.findIndex(
            item => item.productId === product.id && item.size === size && item.color === color
        );

        if (existingIndex > -1) {
            // Update quantity
            this.items[existingIndex].qty += qty;
        } else {
            // Add new item
            this.items.push({
                productId: product.id,
                name: product.name,
                sku: product.sku,
                size: size,
                color: color,
                qty: qty,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.images?.[0] || null
            });
        }

        this.save();
        this.updateUI();
        this.showToast(`${product.name} added to cart!`);

        return true;
    },

    /**
     * Update item quantity
     * @param {number} index - Item index in cart
     * @param {number} qty - New quantity
     */
    updateQty(index, qty) {
        if (index < 0 || index >= this.items.length) return;

        if (qty <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].qty = qty;
            this.save();
            this.updateUI();
        }
    },

    /**
     * Remove item from cart
     * @param {number} index - Item index to remove
     */
    removeItem(index) {
        if (index < 0 || index >= this.items.length) return;

        const removed = this.items.splice(index, 1);
        this.save();
        this.updateUI();
        this.showToast(`${removed[0].name} removed from cart`);
    },

    /**
     * Clear entire cart
     */
    clear() {
        this.items = [];
        this.save();
        this.updateUI();
    },

    /**
     * Get total number of items
     * @returns {number}
     */
    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.qty, 0);
    },

    /**
     * Get subtotal
     * @returns {number}
     */
    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },

    /**
     * Get shipping cost based on subtotal
     * @param {string} method - Shipping method id
     * @returns {number}
     */
    getShipping(method = 'standard') {
        const subtotal = this.getSubtotal();

        // Free shipping over NPR 3000
        if (subtotal >= 3000 && method === 'standard') {
            return 0;
        }

        const rates = {
            standard: 150,
            express: 350
        };

        return rates[method] || 150;
    },

    /**
     * Get total including shipping
     * @param {string} shippingMethod
     * @returns {number}
     */
    getTotal(shippingMethod = 'standard') {
        return this.getSubtotal() + this.getShipping(shippingMethod);
    },

    /**
     * Update all cart UI elements
     */
    updateUI() {
        // Update cart count badges
        const countElements = document.querySelectorAll('.cart-count, #cart-count');
        const count = this.getItemCount();

        countElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });

        // Update cart page if present
        this.renderCartPage();
    },

    /**
     * Render cart items on cart page
     */
    renderCartPage() {
        const cartContainer = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const cartContent = document.getElementById('cart-content');

        if (!cartContainer) return;

        if (this.items.length === 0) {
            if (emptyCart) emptyCart.style.display = 'block';
            if (cartContent) cartContent.style.display = 'none';
            return;
        }

        if (emptyCart) emptyCart.style.display = 'none';
        if (cartContent) cartContent.style.display = 'grid';

        cartContainer.innerHTML = this.items.map((item, index) => {
            const imageSrc = item.image || `https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400`;

            return `
                <div class="cart-item animate-fade-up" style="animation-delay: ${index * 0.1}s">
                    <div class="cart-item-image bg-gray-100">
                        <img src="${imageSrc}" alt="${item.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="cart-item-info flex-grow">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-lg font-bold uppercase tracking-tight mb-1">${item.name}</h3>
                                <p class="text-xs text-gray-500 uppercase tracking-widest mb-4">Size: ${item.size} / Color: ${item.color}</p>
                            </div>
                            <button onclick="Cart.removeItem(${index})" class="text-gray-300 hover:text-black transition-colors" title="Remove">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                            </button>
                        </div>
                        
                        <div class="flex justify-between items-end">
                            <div class="quantity-control scale-90 origin-left">
                                <button class="quantity-btn" onclick="Cart.updateQty(${index}, ${item.qty - 1})">−</button>
                                <span class="quantity-value">${item.qty}</span>
                                <button class="quantity-btn" onclick="Cart.updateQty(${index}, ${item.qty + 1})">+</button>
                            </div>
                            <p class="text-lg font-bold">Rs. ${(item.price * item.qty).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Update totals
        this.updateTotals();
    },

    /**
     * Update order totals
     */
    updateTotals() {
        const subtotalEl = document.getElementById('cart-subtotal');
        const shippingEl = document.getElementById('cart-shipping');
        const totalEl = document.getElementById('cart-total');
        const shippingSelect = document.getElementById('shipping-method');

        const shippingMethod = shippingSelect?.value || 'standard';
        const subtotal = this.getSubtotal();
        const shipping = this.getShipping(shippingMethod);
        const total = subtotal + shipping;

        if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
        if (shippingEl) {
            shippingEl.textContent = shipping === 0 ? 'FREE' : `Rs. ${shipping.toLocaleString()}`;
        }
        if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`;
    },

    /**
     * Show toast notification
     * @param {string} message
     * @param {string} type - 'success' or 'error'
     */
    showToast(message, type = 'success') {
        // Remove existing toast
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        // Create toast
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:0.5rem;">
                ${type === 'success'
                ? '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>'
                : '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>'}
            </svg>
            ${message}
        `;
        document.body.appendChild(toast);

        // Show toast
        setTimeout(() => toast.classList.add('show'), 10);

        // Hide and remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Cart;
}
