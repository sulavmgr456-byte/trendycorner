/**
 * Checkout Module
 * Handles simplified order flow via WhatsApp
 */

const Checkout = {
    /**
     * Store configuration
     */
    config: {
        whatsapp: '9779800596635',
        storeName: 'HANGGER'
    },

    /**
     * Initialize checkout
     */
    init() {
        console.log('Checkout - Initializing...');

        // Render order summary
        this.renderOrderSummary();

        // Bind form submission
        const form = document.getElementById('checkout-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCheckout(form);
            });
        }
    },

    /**
     * Render order summary on checkout page
     */
    renderOrderSummary() {
        const itemContainer = document.getElementById('checkout-items');
        if (!itemContainer) return;

        if (Cart.items.length === 0) {
            window.location.href = 'cart.html';
            return;
        }

        itemContainer.innerHTML = Cart.items.map(item => `
            <div class="flex gap-4 py-4">
                <div class="w-16 h-20 bg-gray-100 shrink-0">
                    <img src="${item.image || 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200'}" 
                         alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="text-xs font-bold uppercase tracking-widest">${item.name}</h4>
                        <span class="text-xs font-bold">Rs. ${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">Size: ${item.size} / Qty: ${item.qty}</p>
                </div>
            </div>
        `).join('');

        this.updateTotals();
    },

    /**
     * Update totals display
     */
    updateTotals() {
        const subtotal = Cart.getSubtotal();
        const shipping = Cart.getShipping('standard'); // Default to standard for summary
        const total = subtotal + shipping;

        const subtotalEl = document.getElementById('checkout-subtotal');
        const shippingEl = document.getElementById('checkout-shipping');
        const totalEl = document.getElementById('checkout-total');

        if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
        if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `Rs. ${shipping.toLocaleString()}`;
        if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`;
    },

    /**
     * Handle checkout form submission
     */
    handleCheckout(form) {
        const formData = new FormData(form);
        const customer = {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            city: document.getElementById('city').value,
            ward: document.getElementById('ward').value,
            paymentMethod: document.querySelector('input[name="payment-method"]:checked').value === 'cod' ? 'Cash on Delivery' : 'Fonepay / QR Code'
        };

        const message = this.generateWhatsAppMessage(customer);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.config.whatsapp}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Optional: Clear cart after some delay or on return
        // Cart.clear();
    },

    /**
     * Generate formatted WhatsApp message
     */
    generateWhatsAppMessage(customer) {
        const orderRef = `TC-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
        const subtotal = Cart.getSubtotal();
        const shipping = Cart.getShipping('standard');
        const total = subtotal + shipping;

        let message = `*NEW ORDER FROM ${this.config.storeName.toUpperCase()}*\n`;
        message += `Order Ref: ${orderRef}\n`;
        message += `---------------------------\n\n`;

        Cart.items.forEach((item, i) => {
            message += `${i + 1}. ${item.name.toUpperCase()}\n`;
            message += `   Size: ${item.size} | Color: ${item.color}\n`;
            message += `   Qty: ${item.qty} × Rs. ${item.price.toLocaleString()}\n`;
            message += `   Subtotal: Rs. ${(item.price * item.qty).toLocaleString()}\n\n`;
        });

        message += `---------------------------\n`;
        message += `SUBTOTAL: Rs. ${subtotal.toLocaleString()}\n`;
        message += `SHIPPING: ${shipping === 0 ? 'FREE' : `Rs. ${shipping.toLocaleString()}`}\n`;
        message += `*TOTAL: Rs. ${total.toLocaleString()}*\n`;
        message += `---------------------------\n\n`;

        message += `*CUSTOMER DETAILS*\n`;
        message += `Name: ${customer.firstName} ${customer.lastName}\n`;
        message += `Email: ${customer.email}\n`;
        message += `Phone: ${customer.phone}\n`;
        message += `Phone: ${customer.phone}\n`;
        message += `Address: ${customer.address}, Ward ${customer.ward}, ${customer.city}\n`;
        message += `Payment Preference: ${customer.paymentMethod}\n\n`;

        message += `Thank you! I'm looking forward to my order. 🙏`;

        return message;
    }
};

// Initialize if on checkout page
if (document.body.dataset.page === 'checkout') {
    document.addEventListener('DOMContentLoaded', () => Checkout.init());
}
