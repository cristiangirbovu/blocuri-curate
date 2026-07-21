# Blocuri Curate - Site de prezentare

Site static (HTML + CSS + JS), fără dependințe de server. Gata de publicat pe **GitHub Pages**.

## Structură
```
index.html      pagina unică (hero, servicii, de ce noi, cum lucrăm, contact)
styles.css      stiluri
script.js        meniu mobil, formular -> WhatsApp, animații la scroll
assets/          logo (SVG), favicon, imagine Open Graph
CNAME            domeniul personalizat (blocuricurate.ro)
robots.txt, sitemap.xml, .nojekyll
```

## Date de contact (de verificat/înlocuit)
Sunt folosite în `index.html` și `script.js`:
- Telefon / WhatsApp: **0746 649 063** (din site-ul vechi - se confirmă)
- Email: **office@blocuricurate.ro** (placeholder pe noul domeniu)
- Program: Luni - Duminică, 8:30 - 20:00
- Zonă: București și Ilfov

Numărul de WhatsApp apare ca `40746649063` în linkurile `wa.me/...` și în `script.js`
(variabila `WA_NUMBER`). Numărul de telefon apare ca `tel:+40746649063`.

## Publicare pe GitHub Pages
1. Creează un repository nou pe GitHub (ex. `blocuricurate-site`), public.
2. Urcă **conținutul acestui folder** în rădăcina repository-ului
   (index.html trebuie să fie în rădăcină, nu într-un subfolder).
3. În repo: Settings -> Pages -> Source: `Deploy from a branch` -> Branch: `main` / `(root)`.
4. Site-ul devine live la `https://<utilizator>.github.io/<repo>/` în 1-2 minute.

## Domeniu personalizat (blocuricurate.ro)
Fișierul `CNAME` este deja pregătit. După ce domeniul este cumpărat:
1. La registrar (unde e cumpărat domeniul), adaugă înregistrările DNS:
   - `A` @ -> `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` -> `<utilizator>.github.io`
2. În repo: Settings -> Pages -> Custom domain -> `blocuricurate.ro` -> Save.
3. Bifează `Enforce HTTPS` după ce DNS-ul se propagă.

Dacă domeniul nu este încă disponibil, șterge fișierul `CNAME` și site-ul rămâne
funcțional pe adresa `github.io`.
