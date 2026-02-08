# MyWebSpace - Roadmap di Miglioramento

Assessment realizzato il: 8 Febbraio 2026

Questo documento traccia tutte le best practice mancanti e le priorità di implementazione per portare il sito a standard professionali.

---

## Stato Attuale

### Punti di Forza
- Struttura ben organizzata con Content Collections
- Routing dinamico implementato correttamente
- Tailwind CSS configurato con custom utilities
- Deploy su Cloudflare Pages funzionante
- TypeScript strict mode abilitato

### Aree Critiche da Migliorare
- SEO completamente assente (meta tags, sitemap, robots.txt)
- Accessibilità insufficiente (mancano alt text, lang attribute)
- Slug basati su title invece di slug dedicati
- Nessuna ottimizzazione immagini
- Mancanza di RSS feed

---

## ROADMAP PER PRIORITÀ

### FASE 1: FONDAMENTALI CRITICI (1-2 settimane)

#### 1.1 Implementare SEO Completo
Status: Not Started | Priorità: CRITICA

Tasks:
- [ ] Creare componente `SEO.astro` riutilizzabile
  - [ ] Meta tags base (title, description)
  - [ ] Open Graph tags (og:title, og:description, og:image, og:url)
  - [ ] Twitter Cards (twitter:card, twitter:title, twitter:description)
  - [ ] Canonical URLs
- [ ] Aggiungere SEO component in `Layout.astro` con props dinamici
- [x] Installare `@astrojs/sitemap`

  ```bash
  npm install @astrojs/sitemap
  ```
- [x] Configurare sitemap in `astro.config.mjs` con `site` URL
- [x] Creare `public/robots.txt`
- [ ] Aggiornare title da "PeppOS" a dinamico per ogni pagina
- [ ] Aggiungere meta description uniche per ogni pagina

Risorse:
- Astro SEO Guide: https://docs.astro.build/en/guides/seo/
- Open Graph Protocol: https://ogp.me/

---

#### 1.2 Fix Content Collections - Schema Slug
Status: Not Started | Priorità: CRITICA

Problema: Attualmente gli URL usano `entry.data.title` come slug. Se cambi un titolo, rompi tutti i link.

Tasks:
- [ ] Aggiungere campo `slug` allo schema in `content.config.ts`
  ```typescript
  schema: z.object({
    title: z.string(),
    slug: z.string(), // NUOVO
    category: z.string(),
    // ...resto
  })
  ```
- [ ] Aggiungere `slug` a tutti i file markdown esistenti in frontmatter
- [ ] Aggiornare `[...slug].astro` per usare `entry.data.slug` invece di `title`
- [ ] Testare che tutti i link funzionino

Impatto: Previene rottura link futuri, migliora SEO

---


#### 1.4 Implementare RSS Feed
Status: Not Started | Priorità: ALTA

Tasks:
- [ ] Installare `@astrojs/rss`
  ```bash
  npm install @astrojs/rss
  ```
- [ ] Creare `src/pages/rss.xml.ts`
- [ ] Configurare feed con titolo, description, items dalle note
- [ ] Aggiungere link al feed in `<head>` e footer
- [ ] Testare feed con validator RSS

Riferimento: Astro RSS Guide - https://docs.astro.build/en/guides/rss/

---

#### 1.5 Pagina 404 Personalizzata
Status: Completed | Priorità: MEDIA-ALTA

Tasks:
- [x] Creare `src/pages/404.astro`
- [x] Design coerente con il resto del sito
- [x] Messaggio amichevole

---

### FASE 2: MIGLIORAMENTI ESPERIENZA (2-3 settimane)

#### 2.2 View Transitions **DONE**
Status: In Progress | Priorità: MEDIA

Tasks:
- [x] Aggiungere View Transitions in `Layout.astro`
  ```typescript
  import { ClientRouter } from 'astro:transitions';
  
  <head>
    <ClientRouter />
  </head>
  ```
- [x] Testare navigazione tra pagine


Impatto: Navigazione fluida tipo SPA, esperienza moderna

Nota: In Astro v5, ViewTransitions è stato sostituito con ClientRouter

---

#### 2.3 Code Quality & Linting
Status: Not Started | Priorità: MEDIA

Tasks:
- [ ] Installare e configurare ESLint
  ```bash
  npm install -D eslint eslint-plugin-astro
  ```
- [ ] Installare Prettier
  ```bash
  npm install -D prettier prettier-plugin-astro
  ```
- [ ] Creare `.eslintrc.cjs` e `.prettierrc`
- [ ] Aggiungere script in `package.json`
  ```json
  "lint": "eslint . --ext .js,.ts,.astro",
  "format": "prettier --write ."
  ```
- [ ] Standardizzare commenti in una lingua (IT o EN)
- [ ] Rimuovere TODO sparsi → creare GitHub Issues

---

#### 2.4 Analytics & Monitoring
Status: Not Started | Priorità: MEDIA

Tasks:
- [ ] Scegliere soluzione privacy-friendly (Plausible/Fathom/Umami)
- [ ] Configurare tracking rispettando GDPR
- [ ] Setup base dashboard
- [ ] Monitoraggio Core Web Vitals

---

#### 2.5 Dark Mode
Status: Not Started | Priorità: MEDIA

Note: Hai già il custom variant `.dark` nel CSS!

Tasks:
- [ ] Creare toggle component
- [ ] Implementare persistenza preferenza (localStorage)
- [ ] Rispettare `prefers-color-scheme`
- [ ] Definire palette dark mode
- [ ] Testare contrasto in dark mode

---

### FASE 3: OTTIMIZZAZIONI AVANZATE (Quando hai tempo)

#### 3.1 Testing Setup
Status: Not Started | Priorità: BASSA

Tasks:
- [ ] Setup Vitest per unit tests
- [ ] Setup Playwright per E2E tests
- [ ] Scrivere test per componenti critici
- [ ] CI/CD con test automatici

---

#### 3.2 Structured Data (JSON-LD)
Status: Not Started | Priorità: BASSA

Tasks:
- [ ] Implementare BlogPosting schema per articoli
- [ ] Person schema per About page
- [ ] WebSite schema per homepage
- [ ] Testare con Schema Validator: https://validator.schema.org/

---

#### 3.3 Performance Avanzata
Status: Not Started | Priorità: BASSA

Tasks:
- [ ] Preload critical fonts
- [ ] Implement Service Worker (offline support)
- [ ] Resource hints (dns-prefetch, preconnect)
- [ ] Code splitting ottimale

---

#### 3.4 UX Enhancements
Status: Not Started | Priorità: BASSA

Tasks:
- [ ] Reading time calculator per articoli
- [ ] Progress bar per articoli lunghi
- [ ] Search functionality (Pagefind integration)
- [ ] Related posts suggestions
- [ ] Table of Contents per post lunghi (già in TODO originale)

---

#### 3.5 Developer Experience
Status: Not Started | Priorità: BASSA

Tasks:
- [ ] Husky per pre-commit hooks
- [ ] Commitlint per conventional commits
- [ ] GitHub Actions CI/CD pipeline
- [ ] Automated dependency updates (Dependabot)

---

## CHECKLIST VELOCE PRE-LANCIO

Prima di considerare il sito "production-ready":

### Must Have (Blockers)
- [ ] Tutte le pagine hanno meta description univoche
- [ ] Sitemap.xml generato e accessibile
- [ ] robots.txt configurato
- [ ] Tutte le immagini hanno alt text
- [ ] RSS feed funzionante
- [ ] Slug dedicati (non basati su title)
- [ ] 404 page personalizzata
- [ ] Title dinamico per ogni pagina
- [ ] Open Graph tags su tutte le pagine

### Should Have (Fortemente raccomandati)
- [x] View Transitions implementate
- [x] Immagini ottimizzate con `<Image>`
- [ ] Dark mode funzionante
- [ ] Analytics configurato
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO)

### Nice to Have
- [ ] Tests setup
- [ ] Structured data
- [ ] Search functionality

---

## RISORSE UTILI

### Documentazione Ufficiale
- Astro Docs: https://docs.astro.build/
- Astro SEO Guide: https://docs.astro.build/en/guides/seo/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro View Transitions: https://docs.astro.build/en/guides/view-transitions/

### Tools & Validators
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Schema.org Validator: https://validator.schema.org/
- RSS Feed Validator: https://validator.w3.org/feed/
- WAVE Accessibility Tool: https://wave.webaim.org/

### Learning
- web.dev (Performance & Best Practices): https://web.dev/
- MDN Web Docs: https://developer.mozilla.org/
- A11y Project: https://www.a11yproject.com/

---

## NOTE FINALI

### Stima Tempi
- Fase 1 (Critici): ~10-15 ore
- Fase 2 (Miglioramenti): ~15-20 ore  
- Fase 3 (Avanzati): ~20-30 ore

### Approccio Consigliato
1. Completa TUTTA la Fase 1 prima di lanciare pubblicamente
2. Implementa Fase 2 gradualmente dopo il lancio
3. Fase 3 quando il traffico lo giustifica

### Metriche di Successo
- Lighthouse Score: >90 in tutte le categorie
- Core Web Vitals: Tutti in verde
- Accessibilità: WCAG AA compliant
- SEO: Indicizzazione corretta su Google entro 2 settimane

---

Ultimo aggiornamento: 8 Febbraio 2026  
Prossima revisione: Dopo completamento Fase 1
