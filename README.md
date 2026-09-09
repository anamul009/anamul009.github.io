# Portfolio

Personal portfolio site — brand design, UI design, and front-end development.

Live at **https://anamul009.github.io**

---

## Run it on your machine

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check the exact files that get published:

```bash
npm run build
```

The finished site lands in `out/`.

---

## Where to edit things

| I want to change... | Open this file |
| --- | --- |
| My name, email, social links, services | `lib/site.ts` |
| Projects and case studies | `lib/projects.ts` |
| Home page sections | `app/page.tsx` |
| About page text and timeline | `app/about/page.tsx` |
| Contact page sidebar | `app/contact/page.tsx` |
| Colours, fonts, animations | `app/globals.css` |

### Adding a project

Copy any entry in `lib/projects.ts`, change the values, and give it a new
`slug`. Everything else updates on its own — the work grid, the case study
page, and the next-project link at the bottom.

Add `featured: true` to put it on the home page.

### Adding real project images

1. Put the image in `public/work/` (for example `public/work/lobmeyr.jpg`).
2. In that project's entry, add `image: "/work/lobmeyr.jpg"`.

The coloured placeholder block disappears once an image is set.

### Turning on the contact form

1. Make a free form at https://formspree.io.
2. Copy the form id (the part after `/f/` in the endpoint URL).
3. Paste it into `formspreeId` in `lib/site.ts`.

Until that is done the form shows a setup notice and cannot send.

---

## How it goes live

Push. That is the whole deploy.

```bash
git add -A && git commit -m "Update work" && git push
```

`.github/workflows/deploy.yml` picks it up, builds the site, and publishes it
to GitHub Pages. Takes about two minutes. Watch it run on the repo's
**Actions** tab.

Remember to `cd` into this folder before running any `npm` or `git` command:

```bash
cd "D:\MyDocument\デスクトップ\anamul009.github.io"
```

### Manual fallback

`npm run deploy` still exists and pushes a build to the `gh-pages` branch.
It is not used any more — Pages now builds from Actions — so ignore it
unless the workflow ever breaks.

---

## Adding a custom domain later

1. Buy the domain.
2. At the DNS host, point the apex at GitHub Pages:
   - `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` to `anamul009.github.io`
3. In the repo: **Settings → Pages → Custom domain**, enter the domain, save,
   then tick **Enforce HTTPS** once the certificate is issued.
4. Update `url` in `lib/site.ts` so page metadata points at the new address.

Email is separate from this. MX records go to whichever mail provider you
choose and do not interfere with the Pages records above.

---

## Stack

Next.js (static export) · React · TypeScript · Tailwind CSS · GitHub Pages
