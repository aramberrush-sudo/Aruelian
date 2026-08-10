# Aruelian — Marketing Site

Static HTML site for Aruelian (Homeownership, Elevated). Three pages: `index.html` (home), `services.html`, `contact.html`.

## Known issue: hero images not loading on Services page

The Services page hero currently points at an external Pexels URL:

```
https://images.pexels.com/photos/35189706/pexels-photo-35189706.jpeg?auto=compress&cs=tinysrgb&w=1920
```

Hotlinked external images can fail to load depending on the viewer/browser (referrer policies, ad blockers, or preview sandboxes that block cross-origin images). **The fix: download the actual image files and reference them locally instead of hotlinking.**

### To fix it:
1. Download real photos of Aruelian's actual work (or licensed stock photos) as `.jpg` files.
2. Put them in the `/images` folder in this repo.
3. In `services.html`, find the `.phero` background CSS rule and replace the Pexels URL with a relative path, e.g.:
   ```css
   background: linear-gradient(...), url('images/kitchen-hero.jpg') center 38%/cover no-repeat;
   ```
4. Do the same for any other `images.pexels.com` URLs in `index.html` (hero, gallery section) and `services.html` (photo strip at the bottom).

Search `grep -rn "images.pexels.com" .` from this folder to find every reference that still needs replacing.

## Getting this into GitHub

```bash
cd aruelian-site
git init
git add .
git commit -m "Initial Aruelian marketing site"
```

Then on GitHub.com:
1. Create a new empty repository (no README/gitignore — you already have files)
2. Copy the commands GitHub shows you under "…or push an existing repository from the command line", something like:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/aruelian-site.git
   git branch -M main
   git push -u origin main
   ```

## Deploying (once in GitHub)

**Vercel** (recommended, matches your existing stack):
1. Go to vercel.com → New Project → Import the `aruelian-site` GitHub repo
2. No build settings needed — it's static HTML, Vercel will detect and deploy it as-is
3. Add your domain (`aruelian.com`) under Project Settings → Domains, then update DNS at your registrar per Vercel's instructions

Every push to `main` after that auto-deploys — no manual re-upload needed.

## Structure

```
aruelian-site/
├── index.html       (homepage)
├── services.html    (services page)
├── contact.html     (contact page)
├── images/          (put local image files here)
└── README.md
```
