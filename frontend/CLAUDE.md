# Tanuja Devang - Website Project

## Project Overview
Website for **Tanuja Devang** - Executive Presence Coach for Women Leaders, Life Coach & Image Consultant.

**Live URL:** https://tanujadevang.com (Hosted on GoDaddy via Cloudflare SSL)
**Repository:** https://github.com/jumanahhhh/blog-react

---

## Tech Stack
- **Framework:** React 18
- **Routing:** React Router DOM
- **Icons:** FontAwesome, React Icons
- **Styling:** CSS (component-based)

---

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── about/
│   │   ├── cert/
│   │   ├── footer/
│   │   ├── gridlayout/
│   │   ├── hero/
│   │   ├── imgconsul/          # Image Consulting page
│   │   ├── legal/              # Privacy, Terms, Cancellation pages
│   │   ├── lifecoaching/       # Life Coaching page
│   │   ├── mentor/
│   │   ├── navbar/
│   │   ├── quote/
│   │   ├── scroll/             # Scroll to top button
│   │   ├── services/
│   │   ├── testimo/
│   │   └── whoisthiscoachingfor/
│   ├── App.js
│   └── index.css
├── build/                      # Production build output
└── package.json
```

---

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Main landing page |
| `/image-consulting` | ImageConsulting | Image consulting services |
| `/life-coaching` | LifeCoaching | Life coaching services |
| `/privacy-policy` | PrivacyPolicy | Privacy policy (for Razorpay) |
| `/terms-and-conditions` | TermsAndConditions | Terms & conditions (for Razorpay) |
| `/cancellation-refund` | CancellationRefund | Cancellation & refund policy (for Razorpay) |

---

## Important Commands

### Development
```bash
npm start           # Start dev server (localhost:3000)
npm run build       # Create production build
```

### Deployment to GoDaddy
1. Run `npm run build`
2. Zip the build folder:
   ```bash
   cd build && zip -r ../build_deploy.zip . && cd ..
   ```
3. Upload `build_deploy.zip` to GoDaddy cPanel → File Manager → `public_html`
4. Extract the zip in cPanel
5. Delete the zip file after extraction

### .htaccess for React Router
Create this file in `public_html` for routes to work:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Git Workflow

### Branches
- `main` - Production branch
- `working-code-until-8th-March-Sunday-2026-9-20pm` - Backup before privacy policy changes

### Push Changes
```bash
git add .
git commit -m "Your message"
git push origin main
```

Remote uses SSH: `git@github.com:jumanahhhh/blog-react.git`

---

## Recent Changes (March 12, 2026)

### Added
- Cancellation & Refund page (`/cancellation-refund`) - separate page for Razorpay
- SSL via Cloudflare (free)

### Updated
- Legal navigation now has 3 tabs (Privacy, Terms, Cancellation)
- Footer includes all 3 legal links
- Removed refund sections from Terms & Conditions (now in separate page)

---

## Changes (March 8, 2026)

### Added
- Privacy Policy page (`/privacy-policy`)
- Terms & Conditions page (`/terms-and-conditions`)
- Legal links in footer
- `react-icons` package

### Removed
- Phone numbers from Hero, Navbar, Footer (client request)
- WhatsApp links with phone numbers

### Improved
- Scroll-to-top button UI (better positioning, animations)
- Legal pages with professional card-based design

---

## Contact Information (Website)
- **Email:** connect@tanujadevang.com
- **Facebook:** https://www.facebook.com/ElevateImage
- **Instagram:** https://www.instagram.com/tanuja.devang
- **LinkedIn:** https://www.linkedin.com/in/tanuja-devang-53977a17/

---

## Notes
- Client: Tanuja Devang
- Razorpay integration requires: Privacy Policy, Terms & Conditions, Cancellation & Refund pages
- SSL: Cloudflare (free) - nameservers: jeremy.ns.cloudflare.com, melissa.ns.cloudflare.com
- Always ask before making changes
- Backup branch before major changes
