# BlueWave Digital — Static Website (Corporate Agency Theme)

This is a multi-page static website designed for GitHub Pages hosting.

## Structure
- index.html (Home)
- about.html
- services.html
- pricing.html
- careers.html (Formspree application form)
- contact.html (Formspree contact form)
- insights.html + /posts (starter blog templates)
- assets/css/style.css
- assets/js/main.js
- images/logo.png (logo + favicon)

## Formspree setup (required)
1) Create a Formspree form for Contact and copy the endpoint:
   - Example: https://formspree.io/f/xxxxxx
2) Replace the placeholder in:
   - contact.html: action="https://formspree.io/f/YOUR_CONTACT_FORM_ID"
   - careers.html: action="https://formspree.io/f/YOUR_APPLICATION_FORM_ID"

## Notes
- Logo and favicon both use: images/logo.png
- Blog posts are starter templates. Replace with your own content for real SEO benefit.
- No build step required: upload files to GitHub Pages as-is.

## Optional
- Add analytics scripts in the <head> of each page if needed.
