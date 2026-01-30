# 🚀 Deployment Guide - Trendy Corner Website

This guide provides step-by-step instructions for deploying your Trendy Corner website to various hosting platforms.

---

## 📋 Table of Contents

1. [GitHub Pages (Free)](#1-github-pages-free)
2. [Netlify (Free)](#2-netlify-free)
3. [Vercel (Free)](#3-vercel-free)
4. [Traditional Hosting (cPanel/FTP)](#4-traditional-hosting-cpanelftp)
5. [Custom Domain Setup](#5-custom-domain-setup)
6. [SSL Certificate (HTTPS)](#6-ssl-certificate-https)

---

## 1. GitHub Pages (Free)

**✅ Best for:** Free hosting, version control, custom domains  
**⚡ Difficulty:** Beginner  
**💰 Cost:** Free forever

### Prerequisites
- GitHub account (create at [github.com](https://github.com))
- Git installed (download from [git-scm.com](https://git-scm.com))

### Step-by-Step Instructions

#### Option A: Using GitHub Web Interface (Easiest)

1. **Create Repository**
   - Go to [github.com](https://github.com) and login
   - Click **"New Repository"** (green button)
   - Name: `trendycorner` (or anything you like)
   - Public or Private (both work)
   - Click **"Create Repository"**

2. **Upload Files**
   - In your new repository, click **"Add file" → "Upload files"**
   - Drag and drop ALL website files and folders
   - Scroll down, click **"Commit changes"**

3. **Enable GitHub Pages**
   - Go to **Settings** (tab at top)
   - Click **"Pages"** (left sidebar)
   - Under "Source", select **Branch: main**, Folder: **/ (root)**
   - Click **"Save"**
   - Wait 1-2 minutes

4. **🎉 Your Site is Live!**
   - URL: `https://yourusername.github.io/trendycorner`
   - Link appears at top of Pages settings

---

#### Option B: Using Git Command Line

1. **Initialize Git Repository**
   ```bash
   cd path/to/trendycorner
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository** (via web, as above)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/trendycorner.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages** (follow step 3 from Option A)

---

### Custom Domain on GitHub Pages

1. **Buy Domain** (from Namecheap, GoDaddy, etc.)

2. **Add CNAME File**
   - Create file named `CNAME` (no extension) in root folder
   - Content: `www.yourstore.com` (your domain)
   - Commit and push

3. **Configure DNS** (at your domain registrar)
   - Add these records:
   
   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | yourusername.github.io |

4. **Wait 24-48 hours** for DNS propagation

5. **Enable HTTPS**
   - GitHub Pages → Check "Enforce HTTPS"

---

## 2. Netlify (Free)

**✅ Best for:** Instant deployment, automatic builds, forms  
**⚡ Difficulty:** Easiest  
**💰 Cost:** Free (100GB bandwidth/month)

### Method 1: Drag & Drop (Fastest)

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click **"Sign up"** (free)

2. **Deploy**
   - Click **"Sites"** → **"Add new site"** → **"Deploy manually"**
   - Drag your entire website folder into the upload area
   - Wait 30 seconds

3. **🎉 Site is Live!**
   - URL: `random-name-12345.netlify.app`
   - Click to open

4. **Change Site Name**
   - Go to **Site Settings** → **Site details**
   - Click **"Change site name"**
   - Choose: `yourstore.netlify.app`

---

### Method 2: Connect to Git (Automatic Updates)

1. **Push Code to GitHub** (see GitHub Pages section)

2. **Import on Netlify**
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect to GitHub
   - Select your repository
   - Click **"Deploy site"**

3. **Auto-Deploy**
   - Every time you push to GitHub, Netlify rebuilds automatically
   - No manual updates needed!

---

### Custom Domain on Netlify

1. **Go to Site Settings** → **Domain Management**

2. **Click "Add custom domain"**
   - Enter: `www.yourstore.com`

3. **Configure DNS** (at domain registrar)
   - Add records:
   
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | www | yoursite.netlify.app |
   | A | @ | 75.2.60.5 |

4. **Enable HTTPS**
   - Netlify automatically provisions SSL (wait 1-2 minutes)

---

## 3. Vercel (Free)

**✅ Best for:** Lightning-fast performance, edge network  
**⚡ Difficulty:** Easy  
**💰 Cost:** Free (100GB bandwidth/month)

### Deployment Steps

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Repository**
   - Click **"Add New"** → **"Project"**
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure**
   - Framework: None (or "Other")
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Click **"Deploy"**

4. **🎉 Live in 30 Seconds!**
   - URL: `trendycorner.vercel.app`

---

### Custom Domain on Vercel

1. **Project Settings** → **Domains**
2. **Add Domain** → Type `www.yourstore.com`
3. **Configure DNS** (follow Vercel's instructions)
4. **HTTPS** auto-provisioned

---

## 4. Traditional Hosting (cPanel/FTP)

**✅ Best for:** Existing hosting, full control  
**⚡ Difficulty:** Moderate  
**💰 Cost:** Varies ($3-10/month)

### Requirements
- Web hosting account with cPanel or FTP access
- Domain name (usually included with hosting)

---

### Method 1: cPanel File Manager

1. **Login to cPanel**
   - URL: `https://yourdomain.com/cpanel`
   - Enter username/password from host

2. **Navigate to public_html**
   - Click **"File Manager"**
   - Go to `public_html` folder
   - Delete default files (index.html, etc.)

3. **Upload Files**
   - Click **"Upload"** button
   - Select ALL website files and folders
   - Wait for upload to complete

4. **Set Default Page**
   - If your homepage is `Home.html`:
     - **Option A:** Rename to `index.html`
     - **Option B:** Create `.htaccess` file with:
       ```apache
       DirectoryIndex Home.html
       ```

5. **🎉 Visit Your Domain**
   - `https://yourdomain.com`

---

### Method 2: FTP Upload

1. **Get FTP Credentials** (from hosting provider)
   - FTP Host: `ftp.yourdomain.com`
   - Username: (from cPanel)
   - Password: (from cPanel)
   - Port: 21

2. **Install FTP Client**
   - Download [FileZilla](https://filezilla-project.org) (free)
   - Or use [Cyberduck](https://cyberduck.io) (Mac)

3. **Connect**
   - Open FileZilla
   - Enter Host, Username, Password, Port
   - Click **"Quickconnect"**

4. **Upload Files**
   - Left side: Your computer
   - Right side: Server
   - Navigate to `public_html` or `www` folder
   - Drag ALL website files to server
   - Wait for upload (5-10 minutes)

5. **Set Permissions** (if needed)
   - Right-click folders → Permissions → 755
   - Right-click files → Permissions → 644

---

### .htaccess Configuration (Recommended)

Create `.htaccess` file in root with:

```apache
# Set default page
DirectoryIndex Home.html index.html

# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST%}/$1 [L,R=301]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access 1 year"
    ExpiresByType image/jpeg "access 1 year"
    ExpiresByType image/png "access 1 year"
    ExpiresByType text/css "access 1 month"
    ExpiresByType application/javascript "access 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## 5. Custom Domain Setup

### Buying a Domain

**Recommended Registrars:**
- [Namecheap](https://namecheap.com) - $8-12/year
- [GoDaddy](https://godaddy.com) - $10-15/year
- [Porkbun](https://porkbun.com) - $6-10/year
- [Google Domains](https://domains.google) - $12/year

**Nepal-specific:**
- [Mercantile](https://www.mos.com.np) - .com.np domains
- [AGM Web Hosting](https://www.agmwebhosting.com) - Local support

---

### Pointing Domain to Hosting

#### For GitHub Pages
See [GitHub Pages Custom Domain](#custom-domain-on-github-pages) section above.

#### For Netlify/Vercel
Follow platform-specific instructions in their dashboards.

#### For Traditional Hosting
1. **Get Nameservers** from hosting provider
   - Example: `ns1.yourhost.com`, `ns2.yourhost.com`

2. **Update at Domain Registrar**
   - Login to domain registrar
   - Find "Nameservers" or "DNS Settings"
   - Replace with hosting nameservers
   - Save changes

3. **Wait 24-48 hours** for propagation

---

## 6. SSL Certificate (HTTPS)

### Free SSL with Let's Encrypt

**GitHub Pages / Netlify / Vercel:**  
✅ Automatic - just enable in settings!

**cPanel Hosting:**

1. **Login to cPanel**
2. **Go to "SSL/TLS Status"**
3. **Click "Run AutoSSL"**
4. **Wait 5 minutes** - certificate installed!

**Manual Installation:**

1. **Go to "SSL/TLS"**
2. **Click "Manage SSL sites"**
3. **Select domain**
4. **Choose "AutoSSL by cPanel"**
5. **Install**

---

### Force HTTPS (Redirect HTTP to HTTPS)

Add to `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [L,R=301]
```

Or in Netlify: `Settings` → `Domain management` → `HTTPS` → `Force HTTPS`

---

## ✅ Post-Deployment Checklist

After deploying:

- [ ] Visit your site and browse all pages
- [ ] Test on mobile device
- [ ] Add products to cart and test checkout
- [ ] Verify WhatsApp/social links work
- [ ] Check all navigation links
- [ ] Test contact form
- [ ] Enable HTTPS/SSL
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test page load speed (use [GTmetrix](https://gtmetrix.com))
- [ ] Share with friends for feedback

---

## 🆘 Troubleshooting

### Site Not Loading
- Wait 24-48 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser or incognito mode
- Check hosting account is active

### 404 Error
- Verify `Home.html` or `index.html` exists in root
- Check `.htaccess` DirectoryIndex setting
- Ensure files uploaded to correct folder (public_html)

### HTTPS Not Working
- Wait 2-24 hours for SSL provisioning
- Check Let's Encrypt is installed (cPanel)
- Verify HTTPS is enabled in platform settings

### Changes Not Showing
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Wait for CDN cache to clear (5-10 minutes)
- Check you edited correct file

---

## 📞 Need Help?

- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **cPanel:** Contact your hosting provider

---

**🎉 Congratulations! Your website is now live!**

Share your URL and start selling! 🚀
