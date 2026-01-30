# 🔧 Website Maintenance Guide - HANGGER

This guide covers regular maintenance tasks to keep your website running smoothly and up-to-date.

---

## 📋 Table of Contents

1. [Regular Maintenance Tasks](#regular-maintenance-tasks)
2. [How to Update Products](#how-to-update-products)
3. [How to Update Store Information](#how-to-update-store-information)
4. [How to Update Content](#how-to-update-content)
5. [Performance Monitoring](#performance-monitoring)
6. [Security Best Practices](#security-best-practices)
7. [Getting Help from AI Assistant](#getting-help-from-ai-assistant)

---

## Regular Maintenance Tasks

### Daily Tasks

✅ **Monitor WhatsApp Orders**
- Check for new order notifications
- Respond to customer inquiries within 24 hours
- Update product availability if items sell out

✅ **Review Website Performance**
- Check if website loads correctly
- Test on mobile and desktop
- Verify all links work

### Weekly Tasks

✅ **Update Product Inventory**
- Add new products
- Remove out-of-stock items
- Update prices if needed

✅ **Check Analytics** (if set up)
- Review visitor count
- See which products are popular
- Check where visitors come from

✅ **Social Media Sync**
- Update Instagram/Facebook with new products
- Link posts to your website
- Engage with customers

### Monthly Tasks

✅ **Content Updates**
- Add new product photos
- Update seasonal collections
- Refresh homepage with current offers

✅ **SEO Check**
- Review Google Search Console
- Update meta descriptions for new products
- Check for broken links

✅ **Backup Website**
- Download full copy of website files
- Save to external drive or cloud storage
- Keep at least 3 recent backups

### Quarterly Tasks (Every 3 Months)

✅ **Major Updates**
- Review and update privacy policy
- Update copyright year (if new year)
- Refresh About page content

✅ **Performance Optimization**
- Compress large images
- Remove unused files
- Test website speed

---

## How to Update Products

### Option 1: Edit JSON File (Recommended)

**File to Edit:** `data/products.json`

**Steps:**

1. **Open the file** in VS Code or any text editor

2. **To Add a New Product:**
   ```json
   {
       "id": 41,
       "name": "Your Product Name",
       "description": "Product description here",
       "price": 1499,
       "originalPrice": 1999,
       "category": "shirts",
       "sizes": ["S", "M", "L", "XL"],
       "colors": [
           {"name": "Black", "hex": "#000000"},
           {"name": "White", "hex": "#FFFFFF"}
       ],
       "images": [
           "https://your-image-url.com/product.jpg"
       ],
       "tags": ["trending", "new arrival"],
       "rating": 4.5,
       "reviews": 10,
       "stock": 50,
       "featured": false
   }
   ```

3. **To Update Product Price:**
   - Find the product by ID or name
   - Change the `price` value
   - Save the file

4. **To Mark as Out of Stock:**
   - Change `"stock": 0`
   - Or remove the product entirely

5. **Upload Changes:**
   - If using Netlify/Vercel with Git: Push changes to GitHub
   - If using FTP: Re-upload `products.json` file
   - Changes appear immediately!

### Option 2: Edit Products.js

**File to Edit:** `js/products.js`

Same format as above, but you edit the JS file instead.

---

## How to Update Store Information

### Change Store Name or Address

**Files to Edit:**
- `data/products.json` (around line 470)
- `js/products.js` (around line 265)

**What to Change:**
```json
"store": {
    "name": "HANGGER",
    "address": "Birendranagar, Surkhet, Nepal",
    "phone": "+977 9800596635",
    "whatsapp": "9800596635",
    "email": "info@hangger.com"
}
```

### Update Contact Information

**Files to Edit:**
- All HTML files (footer section)
- `products.json` 
- `products.js`

Search for the old phone number and replace it everywhere.

### Change Business Hours

**File to Edit:** `contact.html` (around line 142)

```html
<div class="space-y-2 text-gray-500 font-medium uppercase tracking-widest text-sm">
    <p>Sun - Fri: 10:00 AM - 7:00 PM</p>
    <p>Saturday: Closed</p>
</div>
```

---

## How to Update Content

### Homepage Hero Section

**File:** `Home.html` (around line 165)

**Find:**
```html
<h1 class="hero-title">...</h1>
<p class="hero-subtitle">...</p>
```

**Change:** Edit the text between the tags

### About Section

**File:** `Home.html` (around line 348) or `about.html`

**Change:** Update story, mission, values

### Announcement Bar

**Files:** All HTML files (around line 115-120)

**Current:**
```html
<p class="text-[0.65rem] font-bold uppercase">Fast Local Shipping 🚚 • Free Returns within 7 Days</p>
```

**Example Changes:**
- "New Year Sale - 20% OFF Everything!"
- "Free Delivery on Orders Over Rs. 3000"
- "New Collection Arriving Soon!"

---

## Performance Monitoring

### Tools to Use

1. **Google Search Console** (Free)
   - See how your site appears in Google
   - Track search rankings
   - Find and fix errors

2. **Google Analytics** (Free)
   - Track visitor count
   - See popular products
   - Understand customer behavior
   - Setup: See `docs/ANALYTICS.md`

3. **GTmetrix** (Free)
   - Test website speed
   - Get optimization suggestions
   - URL: https://gtmetrix.com

4. **WhatsApp Business** (Free)
   - Track order messages
   - Set up auto-replies
   - Catalog of products

### Monthly Performance Check

1. **Test Website Speed**
   - Go to GTmetrix
   - Enter your website URL
   - Aim for Load Time < 3 seconds

2. **Check Mobile Experience**
   - Open site on your phone
   - Try ordering a product
   - Ensure everything works smoothly

3. **Review Search Rankings**
   - Google your store name
   - Google "men's clothing Surkhet"
   - Check if your site appears

---

## Security Best Practices

### ✅ Do's

✅ **Keep Backups**
- Weekly backups of all files
- Store in multiple locations (cloud + local)

✅ **Use HTTPS**
- Always use SSL certificate
- Force HTTPS redirect

✅ **Strong Passwords**
- Hosting account password
- Social media passwords
- Email passwords

✅ **Monitor Orders**
- Verify customer details before shipping
- Watch for suspicious orders

### ❌ Don'ts

❌ **Don't Share Login Details**
- Keep hosting passwords private
- Don't use same password everywhere

❌ **Don't Delete Backups**
- Keep at least 3 recent versions
- Never delete all backups

❌ **Don't Ignore Updates**
- If hosting provider suggests updates, apply them
- Keep domain registration active

---

## Getting Help from AI Assistant

**I can help you with:**

### ✅ Regular Updates

**Examples:**
- "Add 5 new products to the shop"
- "Update the price of Classic White T-shirt to Rs. 1299"
- "Change the hero section text"
- "Update business hours to 9am-8pm"

### ✅ Design Changes

**Examples:**
- "Make the hero section background darker"
- "Change the announcement bar color to blue"
- "Add a new product category for jackets"
- "Create a sale banner"

### ✅ Feature Additions

**Examples:**
- "Add a size chart popup"
- "Create a seasonal collection section"
- "Add product filters by price range"
- "Create a newsletter signup form"

### ✅ Troubleshooting

**Examples:**
- "The cart isn't showing items correctly"
- "WhatsApp button not working on mobile"
- "Images not loading on product page"
- "Website looks broken on phone"

### ✅ Content Updates

**Examples:**
- "Update all instances of old phone number"
- "Change store address everywhere"
- "Update copyright year to 2027"
- "Translate some sections to Nepali"

---

## How to Request Maintenance from Me

### Format Your Request

**Good Examples:**

1. ✅ "Update product #5 (Classic White T-shirt) price from Rs. 1499 to Rs. 1299"

2. ✅ "Add 3 new products:
   - Black Denim Jacket, Rs. 3999
   - Grey Hoodie, Rs. 2499
   - Blue Chinos, Rs. 1899"

3. ✅ "Change business hours to Sunday-Friday 10am-8pm, Saturday closed"

4. ✅ "Update WhatsApp number from 9800596635 to 9861234567 everywhere"

**Less Effective:**

1. ❌ "Fix the website" (be specific!)
2. ❌ "Make it better" (what exactly needs improvement?)
3. ❌ "Something is broken" (describe what's not working)

---

## Maintenance Workflow

### When You Want to Update Something:

1. **Describe what you want to change**
   - Be specific with details
   - Mention file names if you know them

2. **I'll make the changes**
   - Update the files
   - Test that everything works

3. **You review and approve**
   - Check the changes
   - Request adjustments if needed

4. **Deploy to production**
   - Upload updated files to hosting
   - Or push to GitHub (auto-deploys)

5. **Verify live site**
   - Check website loads correctly
   - Test the updated features

---

## Emergency Contacts

### If Website Goes Down

1. **Check hosting account** - Maybe expired?
2. **Check domain registration** - Maybe needs renewal?
3. **Clear browser cache** - Might be showing old version
4. **Contact hosting provider** - They can help diagnose

### If You Need Urgent Updates

Just message me with:
- What needs to change
- How urgent it is
- When you need it live

I'm here to help maintain your website! 🚀

---

## Maintenance Log Template

Keep track of what you change:

```
Date: 2026-01-30
Change: Added 5 new products for spring collection
Files Modified: products.json
Deployed: Yes
Tested: Yes
Notes: All products displaying correctly

---

Date: 2026-02-15
Change: Updated business hours
Files Modified: contact.html, Home.html
Deployed: Yes
Tested: Yes
Notes: Changed to 10am-8pm weekdays

---

[Continue adding entries...]
```

---

## Quick Reference

### Common File Locations

| What | Where | How Often |
|------|-------|-----------|
| Products | `data/products.json` | Weekly |
| Store Info | `js/products.js` | Rarely |
| Homepage Content | `Home.html` | Monthly |
| Contact Page | `contact.html` | Rarely |
| Announcement Bar | All HTML files (line ~117) | Weekly |
| Business Hours | `contact.html` | As needed |

---

## Summary

✅ **You can maintain this website yourself** - Files are easy to edit
✅ **I can help with all updates** - Just describe what you need
✅ **Keep regular backups** - Safety first!
✅ **Monitor performance** - Keep site fast and secure
✅ **Stay active** - Regular updates keep customers engaged

**Questions? Just ask!** I'm here to help maintain and improve your website anytime. 🎯

---

**Next Steps After Buying Domain:**

1. ✅ Choose hosting (Netlify recommended - free!)
2. ✅ Deploy website (see DEPLOYMENT.md)
3. ✅ Set up Google Analytics (see docs/ANALYTICS.md)
4. ✅ Configure custom domain
5. ✅ Enable HTTPS/SSL
6. ✅ Submit sitemap to Google
7. ✅ Start adding products!
8. ✅ Schedule weekly maintenance checks

**Your website is ready to launch! 🚀**
