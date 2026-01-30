# 📦 Buyer's Guide - Trendy Corner Website

Congratulations on your purchase! This guide will help you take ownership of the Trendy Corner e-commerce website and get it running for your business.

---

## 📋 What You're Getting

A complete, production-ready e-commerce website including:

✅ **8 HTML Pages** - Home, Shop, Product, Cart, Checkout, About, Contact, 404  
✅ **15 Pre-loaded Products** - With images, descriptions, pricing  
✅ **Shopping Cart System** - Fully functional with localStorage  
✅ **Social Checkout** - WhatsApp, Viber, Instagram, Email integration  
✅ **Wishlist Feature** - Save products for later  
✅ **Search & Filtering** - Product search and category filters  
✅ **SEO Optimized** - Meta tags, sitemap, structured data  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **PWA Ready** - Can be installed as mobile app  
✅ **Complete Documentation** - Everything you need to know  

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Download & Extract
Extract the zip file to a folder on your computer.

### Step 2: Test Locally
1. Open `Home.html` in your browser (Chrome, Firefox, Edge)
2. Browse products, add to cart, test checkout
3. Verify everything works

### Step 3: Customize Your Info
Edit `data/products.json` and update the **store** section:

```json
{
  "store": {
    "name": "YOUR STORE NAME",
    "phone": "+977 XXXXXXXXXX",
    "whatsapp": "XXXXXXXXXX",
    "viber": "XXXXXXXXXX",
    "instagram": "your_handle",
    "email": "your@email.com",
    "address": "Your Full Address"
  }
}
```

### Step 4: Deploy (Choose One)
- **GitHub Pages** - Free, custom domain support → [See Guide](DEPLOYMENT.md#github-pages)
- **Netlify** - Free, drag & drop → [See Guide](DEPLOYMENT.md#netlify)
- **Your Hosting** - Upload via FTP → [See Guide](DEPLOYMENT.md#traditional-hosting)

---

## 📝 Essential Customizations

### 🏪 Store Information

Update in **3 places**:

1. **`data/products.json`** - Store section (shown above)
2. **Footer in all HTML files** - Contact details
3. **`js/checkout.js`** - WhatsApp/social links

**Files to edit:**
- `Home.html` (lines 392-413)
- `shop.html` (footer section)
- `about.html` (footer section)
- `contact.html` (footer section)
- `product.html` (footer section)
- `cart.html` (footer section)
- `checkout.html` (footer section)

**Quick Find:** Search for `9800596635` and replace with your number.

---

### 🛍️ Adding/Removing Products

All products are in `data/products.json`.

**To Add a Product:**
```json
{
  "id": "tc-016",
  "name": "Your Product Name",
  "sku": "TC-016",
  "price": 2500,
  "originalPrice": 3000,
  "category": "shirts",
  "sizes": ["S", "M", "L", "XL"],
  "colors": ["Black", "White"],
  "images": ["https://images.unsplash.com/..."],
  "description": "Product description here",
  "material": "100% Cotton",
  "featured": false,
  "isNew": true,
  "inStock": true
}
```

**Product Images:**
- Use Unsplash URLs (free): `https://images.unsplash.com/photo-...?w=900&q=80`
- Upload your own to `/images/products/` folder
- Update `images` array with file paths

**To Remove a Product:**
Delete the entire product object from the array.

---

### 🎨 Branding & Colors

**Change Brand Colors:**
Edit `css/styles.css` (lines 8-22):
```css
:root {
  --color-gold: #F5C842;        /* Accent color */
  --color-dark: #1A1A1A;        /* Background */
  --color-charcoal: #2D2D2D;    /* Dark sections */
}
```

**Add Your Logo:**
1. Place logo in `/images/logo.png`
2. Update `Home.html` line 37 (replace "TRENDY CORNER" text)
3. Or use image: `<img src="images/logo.png" alt="Your Store">`

**Add Favicon:**
1. Create 32x32 px icon: `favicon.ico`
2. Create 192x192 px PNG: `images/icon-192.png`
3. Create 512x512 px PNG: `images/icon-512.png`
4. Place in root folder

---

### 📱 Social Media Links

Update in **`js/checkout.js`** (lines 5-7):
```javascript
const WHATSAPP_NUMBER = '9779800596635';  // Your number with country code
const INSTAGRAM_HANDLE = '_trendycorner3'; // Your handle (no @)
const VIBER_NUMBER = '9779800596635';      // Your Viber number
```

Update footer in all HTML files:
- Instagram link (search for `instagram.com/_trendycorner3`)
- WhatsApp link (search for `wa.me/9779800596635`)

---

## 🌐 How to Deploy Your Website

### Option 1: GitHub Pages (Recommended - Free Forever)

**Prerequisites:** GitHub account (free)

**Steps:**
1. Go to [github.com](https://github.com) and create account
2. Create new repository (name it anything, e.g., "trendycorner")
3. Upload all website files to the repository
4. Go to **Settings → Pages**
5. Select `main` branch, root folder
6. Click Save
7. Your site is live at: `https://yourusername.github.io/trendycorner`

**Custom Domain:**
1. Buy domain (e.g., from Namecheap, GoDaddy)
2. Add `CNAME` file with your domain name
3. Configure DNS settings (see [DEPLOYMENT.md](DEPLOYMENT.md))

**Full guide:** [DEPLOYMENT.md#github-pages](DEPLOYMENT.md#github-pages)

---

### Option 2: Netlify (Easiest - Free)

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop your website folder
4. Site is live in 30 seconds!
5. Get free subdomain: `yoursite.netlify.app`

**Custom Domain:** Add in Netlify dashboard (Settings → Domain Management)

**Full guide:** [DEPLOYMENT.md#netlify](DEPLOYMENT.md#netlify)

---

### Option 3: Your Own Hosting (cPanel/FTP)

If you already have web hosting:

**Steps:**
1. Login to cPanel or FTP client (FileZilla)
2. Navigate to `public_html` folder
3. Upload ALL website files
4. Make sure `Home.html` is the index page
5. Visit your domain

**Set Default Page:**
- Rename `Home.html` to `index.html`, OR
- Add to `.htaccess`:
  ```
  DirectoryIndex Home.html
  ```

**Full guide:** [DEPLOYMENT.md#traditional-hosting](DEPLOYMENT.md#traditional-hosting)

---

## 🛒 How Orders Work (No Payment Gateway!)

This website uses **social checkout** - orders come directly to your WhatsApp/Instagram:

### Customer Journey:
1. Customer adds products to cart
2. Clicks "Checkout"
3. Selects checkout method (WhatsApp, Viber, Instagram, Email)
4. Order details are pre-filled:
   ```
   NEW ORDER from Trendy Corner
   
   Products:
   - Classic Oxford Shirt (Size: L, Color: Navy) x1 - Rs. 2,499
   - Slim Fit Chinos (Size: 32, Color: Khaki) x2 - Rs. 4,598
   
   Total: Rs. 7,097
   
   Customer Name: John Doe
   Phone: 984XXXXXXX
   ```
5. Message is sent to YOUR business account
6. You receive the order and reply to confirm

### Your Response:
```
Hi John! Thanks for your order! 

Delivery: 3-5 days to Kathmandu
Delivery Fee: Rs. 150
Total: Rs. 7,247

Payment Options:
1. Cash on Delivery
2. eSewa/Khalti: 98XXXXXXXX
3. Bank Transfer: [Your Bank Details]

Which do you prefer?
```

### Processing Orders:
- Keep an order notebook or use Google Sheets
- Confirm stock availability
- Arrange delivery
- Send tracking info via chat

**Benefits:**
- ✅ No payment gateway fees (3-5%)
- ✅ Direct customer relationships
- ✅ Flexible payment (COD, bank transfer, wallets)
- ✅ Build trust through conversation

---

## 📊 Adding Analytics (Track Visitors)

**Google Analytics 4 (Recommended):**

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account & property
3. Copy your Measurement ID (G-XXXXXXXXXX)
4. Add to ALL HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Full guide:** [docs/ANALYTICS.md](docs/ANALYTICS.md)

---

## 🔒 Security Checklist

✅ **Use HTTPS** - All deployment platforms provide free SSL  
✅ **Keep backups** - Download website files monthly  
✅ **Update contact info** - Replace all placeholder data  
✅ **Test checkout** - Verify messages reach you  
✅ **Monitor orders** - Check WhatsApp/Instagram regularly  

**Full guide:** [docs/SECURITY.md](docs/SECURITY.md)

---

## 🐛 Troubleshooting

### Products Not Showing
- Check `data/products.json` for syntax errors (use [jsonlint.com](https://jsonlint.com))
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Cart Not Working
- Enable localStorage in browser settings
- Clear localStorage: F12 → Application → Local Storage → Clear
- Try different browser

### Checkout Links Not Working
- Verify WhatsApp number in `js/checkout.js` has country code
- Test on mobile device (WhatsApp doesn't work well on desktop)
- Check Instagram handle (no @ symbol in code)

### Mobile Menu Not Opening
- Clear cache
- Check `js/app.js` loaded correctly
- Test on different device

---

## 📞 Getting Help

### Technical Issues
- Check browser console (F12) for errors
- Review [documentation files](.)
- Search error messages online

### Customization Help
- Hire a web developer on Fiverr/Upwork
- Local web agencies in Kathmandu
- Online tutorials (YouTube, freeCodeCamp)

### Original Developer
- **Email:** info@trendycorner.com
- **WhatsApp:** +977 9800596635

---

## 📈 Growing Your Business

### Marketing Tips:
1. **Social Media** - Post products daily on Instagram/Facebook
2. **WhatsApp Status** - Show new arrivals
3. **Paid Ads** - Facebook/Instagram ads (start with Rs. 500/day)
4. **Influencer Marketing** - Send free products to micro-influencers
5. **SEO** - Add blog section with fashion tips (drives organic traffic)

### Website Improvements:
- Add customer testimonials
- Create size guide for each category
- Add "Best Sellers" section
- Seasonal sales banners
- Email newsletter collection

---

## ✅ Handover Checklist

Before you launch:

- [ ] Updated store name and contact info everywhere
- [ ] Replaced products with your inventory
- [ ] Added your logo and favicon
- [ ] Updated social media links
- [ ] Tested checkout on mobile (WhatsApp, Viber, Instagram)
- [ ] Deployed to hosting platform
- [ ] Added Google Analytics
- [ ] Tested on multiple devices
- [ ] Verified all links work
- [ ] Set up custom domain (optional)
- [ ] Created business social media accounts
- [ ] Prepared product images
- [ ] Set up payment methods (eSewa, bank account)

---

## 🎉 You're Ready to Launch!

Your website is professional, fast, and ready to sell. Focus on:
1. **Quality products** - Source or create great inventory
2. **Fast response** - Reply to orders within hours
3. **Customer service** - Build relationships, get reviews
4. **Marketing** - Drive traffic to your site

**Best of luck with your online store! 🚀**

---

## 📄 Additional Resources

- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guides
- [docs/ANALYTICS.md](docs/ANALYTICS.md) - Analytics setup
- [docs/SECURITY.md](docs/SECURITY.md) - Security best practices
- [docs/PERFORMANCE.md](docs/PERFORMANCE.md) - Speed optimization
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

*Made with ❤️ for your success*
