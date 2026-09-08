# Crowd Control — portfolio showcase

This website is part of **Grigorii Khralenok’s portfolio**, for **viewing purposes only**. **All rights belong to CRWD CNTRL.** It is not an operational agency website. Services, results, and historical testimonial excerpts appear as design content; brand references in the excerpts have been removed and marked with brackets.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## GitHub Pages

Push this project to the `main` branch of a GitHub repository and select **Settings → Pages → GitHub Actions**. The included workflow publishes the static site. There is no build step or runtime dependency. Internal links and assets use relative paths for repository-subpath hosting. Set the `og:image` metadata to the final absolute public image URL after choosing a deployment URL.

## Files

- `index.html`: all showcase content, portfolio notices, testimonials, and case studies.
- `styles.css`: responsive styling and CSS animations.
- `script.js`: accessible review/case selection, mobile navigation, and copyright year.
- `assets/`: production graphics, fonts, social image, and required font license.
- `redesign/`: original supplied brand references; excluded from deployment.
- `privacy-policy/` and `cookie-policy/`: disclosures describing this view-only implementation.

## Behavior

The contact-form demonstration contains prefilled fictional data and showcases default, valid, invalid, disabled, and focus-preview states. Native input validation and CSS update feedback when examples are edited. The standalone controls have no HTML form submission context, JavaScript handler, or storage. The send button is disabled. There are no email links, booking features, analytics, or tracking storage.

The hero dot and mascot animate using CSS. The partner-logo strip pauses on hover. Reduced-motion preferences disable animations and show a static logo grid. Service cards use native grouped disclosures and CSS expansion transitions. Result-card entrances follow scroll position. Older browsers display content with simpler motion fallbacks.

All review and case content is available with JavaScript disabled. JavaScript only coordinates accessible selection and mobile navigation. The original brand-reference files and font licensing notices remain as source documentation.

## Interface icons

UI icons use Google Material Icons (Outlined), from https://github.com/google/material-design-icons, under Apache 2.0. Only the selected SVG artwork is embedded in the HTML, with `currentColor` styling and decorative accessibility attributes. No icon font, JavaScript library, or external requests are needed. The license is included in `assets/Material-Icons-LICENSE.txt`. Brand graphics and client logos remain separate from interface icons.
