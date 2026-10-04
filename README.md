# starOva Technologies — warm editorial website

This is a fresh Next.js + Tailwind CSS implementation for starOva Technologies.

## Design direction

The interface is based on the supplied warm palette:

- `#291C0E` — deep brown
- `#6E473B` — brown
- `#A78D78` — muted taupe
- `#BEB5A9` — warm gray
- `#E1D4C2` — cream

The visual approach is intentionally lightweight: Tailwind utilities do the page styling and `globals.css` only contains the small amount of true global behavior.

## Pages

- `/` — home
- `/about` — about
- `/solutions` — solutions
- `/contact` — contact

## Logo

Place the supplied transparent logo at:

`public/images/logo/starOva.png`

The supplied logo is already included in this package.

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Next.js.

## Notes

The contact form currently posts to FormSubmit using the existing starOva email address. Replace that endpoint later if a dedicated backend/email provider is preferred.
