# 📊 Analytics Integration Guide

This guide will help you set up analytics tracking for your Trendy Corner website to understand your visitors and optimize your marketing.

---

## 🎯 Why Analytics?

Track important metrics:
- 📈 **Visitor count** - How many people visit your site
- 📍 **Location** - Where your customers are from  
- 🛒 **Popular products** - What sells best
- 📱 **Devices** - Mobile vs desktop traffic
- 🔗 **Traffic sources** - Facebook, Google, Instagram, direct
- ⏱️ **Behavior** - Time on site, pages viewed

---

## 1️⃣ Google Analytics 4 (Recommended - Free)

### Setup Steps

1. **Create Google Analytics Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click **"Start measuring"**
   - Account name: `Trendy Corner`
   - Click **"Next"**

2. **Create Property**
   - Property name: `Trendy Corner Website`
   - Time zone: `Asia/Kathmandu`
   - Currency: `Nepalese Rupee (NPR)`
   - Click **"Next"**

3. **Business Information**
   - Industry: `Retail/E-commerce`
   - Business size: Select your size
   - Click **"Create"**
   - Accept Terms of Service

4. **Set Up Data Stream**
   - Select **"Web"**
   - Website URL: `https://yoursite.com`
   - Stream name: `Trendy Corner Web`
   - Click **"Create stream"**

5. **Copy Measurement ID**
   - You'll see: `G-XXXXXXXXXX`
   - Copy this ID

---

### Installation

Add this code to **ALL HTML files** before `</head>` tag:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Files to edit:**
- Home.html
- shop.html
- product.html
- cart.html
- checkout.html
- about.html
- contact.html
- 404.html

---

### Track E-Commerce Events

Add to `js/cart.js` to track purchases:

```javascript
// After successful cart add
function addToCart(product) {
  // ... existing code ...
  
  // Track with GA4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'add_to_cart', {
      currency: 'NPR',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: 1
      }]
    });
  }
}
```

Add to `js/checkout.js` to track purchases:

```javascript
// After checkout button click
function checkout(method) {
  // ... existing code ...
  
  // Track purchase
  if (typeof gtag !== 'undefined') {
    gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: cartTotal,
      currency: 'NPR',
      items: cart.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    });
  }
}
```

---

### What to Track in Google Analytics

After 1-2 weeks, check:

**Acquisition Reports:**
- Where visitors come from (Google, Facebook, direct)
- Best performing social media

**Engagement Reports:**
- Most visited pages
- Average session duration
- Bounce rate

**E-commerce Reports** (with enhanced tracking):
- Products added to cart
- Checkout completions
- Revenue by product

---

## 2️⃣ Facebook Pixel

Track visitors from Facebook ads and Instagram.

### Setup Steps

1. **Go to Facebook Events Manager**
   - Visit [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
   - Click **"Connect Data Sources"** → **"Web"**
   - Click **"Get Started"**

2. **Create Pixel**
   - Name: `Trendy Corner`
   - Website URL: `https://yoursite.com`
   - Click **"Continue"**

3. **Install Pixel Code**
   - Choose **"Manually install code"**
   - Copy the Pixel code

4. **Add to All HTML Pages**

Add before `</head>`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

---

### Track Shopping Events

Add to `js/cart.js`:

```javascript
// Track add to cart
if (typeof fbq !== 'undefined') {
  fbq('track', 'AddToCart', {
    content_ids: [product.id],
    content_type: 'product',
    value: product.price,
    currency: 'NPR'
  });
}
```

Add to `js/checkout.js`:

```javascript
// Track checkout start
if (typeof fbq !== 'undefined') {
  fbq('track', 'InitiateCheckout', {
    value: cartTotal,
    currency: 'NPR',
    num_items: cart.length
  });
}
```

---

## 3️⃣ Google Tag Manager (Advanced)

Manage all tracking codes from one place.

### Setup

1. **Create Account**
   - Go to [tagmanager.google.com](https://tagmanager.google.com)
   - Click **"Create Account"**
   - Account name: `Trendy Corner`
   - Container name: `trendycorner.com`
   - Target platform: **Web**
   - Click **"Create"**

2. **Install Container Code**

Add to **ALL HTML pages** after `<head>`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add after `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

3. **Add Tags in GTM**
   - Add Google Analytics tag
   - Add Facebook Pixel tag
   - Configure triggers for page views, clicks, etc.

**Benefit:** Update tracking without editing code!

---

## 4️⃣ Hotjar (Heatmaps & Recordings)

See how users interact with your site.

### Setup

1. **Sign Up**
   - Go to [hotjar.com](https://hotjar.com)
   - Free plan: 35 daily sessions

2. **Add Site**
   - Enter your website URL
   - Copy tracking code

3. **Install**

Add before `</head>`:

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

### What Hotjar Shows
- 🔥 **Heatmaps** - Where users click and scroll
- 📹 **Session recordings** - Watch user sessions
- 📝 **Feedback polls** - Ask users questions
- 🎯 **Conversion funnels** - See drop-off points

---

## 📊 Recommended Analytics Setup

**For Most Businesses:**
- ✅ Google Analytics 4 (must-have)
- ✅ Facebook Pixel (if running ads)
- ⚠️ Hotjar (nice to have, but paid after trial)

**For Advanced Users:**
- Google Tag Manager (manage everything)
- Google Search Console (SEO performance)
- Microsoft Clarity (free Hotjar alternative)

---

## 🔍 Google Search Console (Bonus - SEO)

Track your SEO performance.

### Setup

1. **Go to [search.google.com/search-console](https://search.google.com/search-console)**
2. **Add Property** → Enter your website URL
3. **Verify Ownership**
   - Method 1: HTML tag (easiest)
   - Copy meta tag
   - Add to all HTML pages in `<head>`:
     ```html
     <meta name="google-site-verification" content="XXXXXXXXXXXXX" />
     ```
   - Click **"Verify"**

4. **Submit Sitemap**
   - Go to **Sitemaps**
   - Enter: `sitemap.xml`
   - Click **"Submit"**

### What Search Console Shows
- 🔍 Which keywords bring traffic
- 📊 Click-through rates
- 🐛 Crawl errors
- 📱 Mobile usability issues

---

## ✅ Analytics Checklist

After installing:

- [ ] Google Analytics code on all pages
- [ ] Test using Google Analytics Debugger extension
- [ ] Check real-time reports (visit your site)
- [ ] E-commerce tracking code added
- [ ] Facebook Pixel installed (if using ads)
- [ ] Pixel Helper extension shows green checkmark
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Bookmark analytics dashboard for daily checks

---

## 📈 Using Analytics to Grow

**Weekly:**
- Check visitor count (growing?)
- Top 5 products (stock these!)
- Traffic sources (focus marketing here)

**Monthly:**
- Compare to last month
- Identify best-selling items
- Adjust product lineup

**Actions to Take:**
- More social posts about popular products
- Run ads for high-margin items
- Remove products nobody views
- Optimize slow-loading pages

---

## 🆘 Troubleshooting

**Analytics not showing data:**
- Wait 24-48 hours for first data
- Check code is before `</head>`
- Use browser extensions to verify:
  - Google Analytics Debugger (Chrome)
  - Facebook Pixel Helper (Chrome)
- Check for JavaScript errors (F12)

**Real-time not working:**
- Visit site in incognito mode
- Check internet connection
- Verify tracking ID is correct

---

## 📞 Resources

- **Google Analytics Academy:** [analytics.google.com/analytics/academy](https://analytics.google.com/analytics/academy)
- **Facebook Blueprint:** [facebook.com/business/learn](https://facebook.com/business/learn)
- **Analytics Help:** Contact developer at info@trendycorner.com

---

*Happy tracking! Use data to grow your business! 📊*
