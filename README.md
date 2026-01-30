# 🛍️ Trendy Corner - Modern E-Commerce Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A **premium, production-ready** static e-commerce website for men's fashion with social checkout integration. No backend or payment gateway required - perfect for small to medium businesses in Nepal and beyond.

---

## ✨ Features

### 🛒 E-Commerce Functionality
- ✅ **Full Shopping Cart** - Add, update, remove items with localStorage persistence
- ✅ **Social Checkout** - WhatsApp, Viber, Instagram, and Email checkout options
- ✅ **Product Catalog** - 15+ products with categories, filtering, and search
- ✅ **Wishlist System** - Save favorite items for later
- ✅ **Product Quick View** - Preview products without leaving the shop page
- ✅ **Recently Viewed** - Track customer browsing history

### 🎨 Design & UX
- ✅ **Premium Dark Theme** - Modern, editorial fashion aesthetic
- ✅ **Fully Responsive** - Mobile-first design, works on all devices
- ✅ **Smooth Animations** - Micro-interactions and scroll effects
- ✅ **Custom 404 Page** - Branded error page with navigation
- ✅ **Loading States** - Professional skeleton screens and spinners

### 🔍 SEO & Performance
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Structured Data** - Schema.org markup for products
- ✅ **Sitemap & Robots.txt** - Search engine ready
- ✅ **Fast Loading** - Optimized assets and lazy loading
- ✅ **PWA Ready** - Web manifest for installable app

### 📄 Pages Included
- **Home** - Hero section, featured products, collections, testimonials
- **Shop** - Product grid with filtering, sorting, and search
- **Product Detail** - Image gallery, size/color selection, add to cart
- **Cart** - View items, update quantities, apply discounts
- **Checkout** - Social checkout flow with order summary
- **About** - Brand story and philosophy
- **Contact** - Contact form and store information
- **Policy Pages** - Shipping, Returns, Privacy

---

## 🚀 Quick Start

### Option 1: Direct File Opening
Simply open `Home.html` in any modern browser.

### Option 2: Local Development Server

**Using Python:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js:**
```bash
npx serve .
# Visit: http://localhost:3000
```

**Using VS Code:**
1. Install the "Live Server" extension
2. Right-click `Home.html`
3. Select "Open with Live Server"

---

## 📁 Project Structure

```
trendycorner/
├── Home.html              # Landing page
├── shop.html              # Product catalog
├── product.html           # Product detail page
├── cart.html              # Shopping cart
├── checkout.html          # Social checkout
├── about.html             # About page
├── contact.html           # Contact form
├── 404.html               # Error page
│
├── css/
│   └── styles.css         # Custom styles + Tailwind overrides
│
├── js/
│   ├── app.js            # Main application logic
│   ├── cart.js           # Cart management
│   ├── products.js       # Product loading & rendering
│   ├── checkout.js       # Checkout integration
│   └── animations.js     # UI animations
│
├── data/
│   └── products.json     # Product catalog database
│
├── policies/
│   ├── shipping.html
│   ├── returns.html
│   └── privacy.html
│
├── images/               # Product & brand images
│
└── docs/
    ├── BUYER_GUIDE.md    # Handover guide
    ├── DEPLOYMENT.md     # Deployment instructions
    ├── ANALYTICS.md      # Analytics setup
    └── SECURITY.md       # Security best practices
```

---

## 🎯 Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, SEO-friendly structure |
| **CSS3 + Tailwind CSS** | Styling, responsive design, utilities |
| **Vanilla JavaScript** | No frameworks - fast, lightweight, easy to customize |
| **localStorage** | Client-side cart and wishlist persistence |
| **JSON** | Product database |
| **External APIs** | WhatsApp, Viber, Instagram integration |

**No Backend Required!** This is a 100% static website that can be hosted anywhere.

---

## ✏️ Customization Guide

### 1️⃣ Update Store Information

Edit `data/products.json` - **store** section:
```json
{
  "store": {
    "name": "YOUR STORE NAME",
    "phone": "+977 XXXXXXXXXX",
    "whatsapp": "XXXXXXXXXX",
    "instagram": "your_handle",
    "email": "your@email.com",
    "address": "Your Address"
  }
}
```

### 2️⃣ Add/Edit Products

Edit `data/products.json` - **products** array:
```json
{
  "id": "unique-id",
  "name": "Product Name",
  "sku": "SKU-001",
  "price": 2500,
  "originalPrice": 3000,
  "sizes": ["S", "M", "L", "XL"],
  "colors": ["Black", "Navy"],
  "description": "Product description",
  "category": "shirts",
  "material": "100% Cotton",
  "featured": true,
  "isNew": true,
  "inStock": true,
  "images": ["https://example.com/image.jpg"]
}
```

### 3️⃣ Change Colors & Branding

Edit `css/styles.css` - CSS variables:
```css
:root {
  --color-gold: #F5C842;
  --color-dark: #1A1A1A;
  --color-charcoal: #2D2D2D;
  /* Add your brand colors */
}
```

### 4️⃣ Update Contact Links

Update in all HTML files:
- Footer contact information
- Header navigation
- Social media links

Files to update: `Home.html`, `shop.html`, `about.html`, `contact.html`

### 5️⃣ Add Your Logo & Favicon

Replace:
- `/images/logo.png` - Your logo
- `/favicon.ico` - Browser favicon
- `/images/icon-192.png` & `/images/icon-512.png` - PWA icons

---

## 🌐 Deployment Options

### GitHub Pages (Free, Recommended)
1. Create GitHub repository
2. Push code to `main` branch
3. Go to **Settings → Pages**
4. Select `main` branch, root folder
5. Your site: `https://username.github.io/repo-name`

**Custom Domain:** Add `CNAME` file with your domain

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop project folder
3. Site live in seconds
4. Auto-deploy on Git push

### Vercel (Free)
1. Connect GitHub at [vercel.com](https://vercel.com)
2. Import repository
3. Auto-deploy on every push

### Traditional Hosting (cPanel/FTP)
1. Upload all files via FTP/File Manager
2. Ensure `Home.html` is set as index page
3. Configure `.htaccess` if needed

📖 **Detailed deployment guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🛒 How Social Checkout Works

This website uses a **"social checkout"** system - no payment gateway needed!

1. **Customer browses** and adds items to cart
2. **Customer clicks checkout** and selects platform (WhatsApp, Viber, Instagram, Email)
3. **Order details are pre-filled** in a message with:
   - Product names, quantities, sizes, colors
   - Total price
   - Customer details
4. **Customer sends message** to your business account
5. **You confirm order** via chat and arrange payment:
   - Cash on Delivery
   - Bank Transfer
   - Mobile Wallets (eSewa, Khalti, etc.)

**Benefits:**
- ✅ No payment gateway fees
- ✅ Direct customer communication
- ✅ Build relationships
- ✅ Flexible payment options
- ✅ Works in any country

---

## 📊 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile Safari (iOS) | ✅ iOS 12+ |
| Chrome (Android) | ✅ Android 5+ |

**Tested on:** Windows, macOS, iOS, Android

---

## 🔒 Security Features

- ✅ Input sanitization and validation
- ✅ XSS prevention
- ✅ Content Security Policy ready
- ✅ HTTPS redirect (when deployed)
- ✅ No sensitive data storage

📖 **Security guide:** See [SECURITY.md](docs/SECURITY.md)

---

## 📈 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Hotjar

📖 **Setup guide:** See [ANALYTICS.md](docs/ANALYTICS.md)

---

## 📱 Progressive Web App (PWA)

The website includes a web manifest and can be installed as an app on mobile devices:
- Add to home screen on iOS/Android
- Offline-ready with service worker (optional)
- Native app-like experience

---

## 🎓 Documentation

- **[BUYER_GUIDE.md](BUYER_GUIDE.md)** - Complete handover guide for new owners
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step deployment instructions
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and updates
- **[docs/ANALYTICS.md](docs/ANALYTICS.md)** - Analytics integration guide
- **[docs/SECURITY.md](docs/SECURITY.md)** - Security best practices
- **[docs/PERFORMANCE.md](docs/PERFORMANCE.md)** - Performance optimization

---

## 🆘 FAQ

**Q: Can I use this for my business?**  
A: Yes! This is a commercial-ready template. See LICENSE for details.

**Q: Do I need coding knowledge?**  
A: Basic HTML/JSON editing is helpful but not required. All customization is straightforward.

**Q: How do I add more products?**  
A: Edit `data/products.json` following the existing format.

**Q: Can I integrate a real payment gateway?**  
A: Yes! You can add Stripe, PayPal, or local gateways with JavaScript integration.

**Q: Is there a database?**  
A: Products are stored in `products.json`. For 100+ products, consider migrating to a backend.

**Q: How do I handle orders?**  
A: Orders come via WhatsApp/social media. Track them manually or integrate with Google Sheets.

**Q: Can I change the design?**  
A: Yes! All styling is in `css/styles.css`. Tailwind utility classes can be modified in HTML.

**Q: Is it mobile-friendly?**  
A: Yes! The design is mobile-first and fully responsive.

---

## 📞 Support

For questions or issues:
- **Email:** info@trendycorner.com
- **WhatsApp:** +977 9800596635
- **Instagram:** [@_trendycorner3](https://instagram.com/_trendycorner3)

---

## 📄 License

MIT License - Free for commercial use. See [LICENSE](LICENSE) for details.

---

## 🎉 Credits

**Designed & Developed for Trendy Corner**  
- Premium editorial design
- No framework dependencies
- Production-ready code
- Comprehensive documentation

**Made with ❤️ in Nepal**

---

## 🚀 Get Started Now!

1. **Clone or download** this repository
2. **Open `Home.html`** in your browser
3. **Customize** store info in `data/products.json`
4. **Deploy** to GitHub Pages, Netlify, or Vercel
5. **Start selling!** 🎊

Need help? See [BUYER_GUIDE.md](BUYER_GUIDE.md) for complete handover instructions.
