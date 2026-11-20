# Halcyon Arc website

Static site for Halcyon Arc, served with GitHub Pages. Plain HTML/CSS/JS, no build step.

## Pages
Home, AI Safety, AI Security, Cyber Security, Dementia Detection, Dementia Care, Platform, About, Contact, Privacy, Terms.

## Publish
Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)`.

## Custom domain (halcyonarc.ai)
1. Add a `CNAME` file containing `halcyonarc.ai` (or set it under Settings → Pages).
2. At your DNS provider, add A records for the apex to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and a CNAME for `www` pointing to `<username>.github.io`.
3. Tick **Enforce HTTPS** once the certificate is issued.
