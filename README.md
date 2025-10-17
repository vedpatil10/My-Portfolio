Vedant Patil — Portfolio
========================

Bright, modern, animation-rich portfolio. Static (HTML/CSS/JS) — easy free hosting.

Local preview
-------------

- Open `index.html` directly, or run a simple server:

```bash
python -m http.server 8080
```

Customize
---------

- Replace `assets/me.jpg` with your photo (or change the `src` in `index.html`).
- Update Contact links (email/LinkedIn/GitHub) in `index.html`.
- Add real links to project cards.

Files
-----

- `index.html` — main page
- `css/style.css` — bright theme + responsive
- `js/main.js` — canvas background, tilt, reveal animations
- `VEDANT PATIL IN.pdf`, `VEDANT PATIL NC.pdf`, `VEDANT PATIL WD.pdf`, `VP.pdf` — resume downloads

Deploy (Free)
-------------

Vercel (recommended)
~~~~~~~~~~~~~~~~~~~~

1. Push to GitHub:

```bash
git init
git add .
git commit -m "feat: portfolio initial"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

2. On Vercel: New Project → Import Repo → Framework: Other → Deploy.

GitHub Pages
~~~~~~~~~~~~

Settings → Pages → Deploy from a branch → `main` and root `/` → Save.

Netlify
~~~~~~~

Drag-and-drop the folder or connect your repo. The contact form uses `netlify` attribute.

Notes
-----

- No build step; fully static. Add images in `assets/`.
- Background is a colorful canvas for an "unreal" vibe.


