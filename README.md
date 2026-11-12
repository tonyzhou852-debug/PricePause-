# PricePause landing page

Landing page for **PricePause**, a Chrome extension that helps impulsive buyers find better prices and coupons before they check out.

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

- `index.html` is the page
- `style.css` is the styling
- `script.js` handles the pricing toggle and the demo waitlist form
- `assets/pricepause_explainer.mp4` is the explainer video
- `assets/poster.jpg` is the video thumbnail

## Run locally

Open `index.html` in a browser.

## Publish with GitHub Pages

1. Push these files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Choose branch `main` and folder `/ (root)`, then click **Save**.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Collecting real waitlist emails (optional)

The form is a demo and does not store emails. To make it real, create a free form at formspree.io, then change the form tag in `index.html` to:

```html
<form id="waitlistForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

and in `script.js` delete the whole `form.addEventListener("submit", ...)` block at the bottom so the form submits normally.

*A student project. Prototype pricing, no payments are processed.*
