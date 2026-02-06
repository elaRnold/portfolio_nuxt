# Arnaldo Benavides — Portfolio

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt&labelColor=020420)](https://nuxt.com)
[![Nuxt UI](https://img.shields.io/badge/Nuxt%20UI-4-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Nuxt Content](https://img.shields.io/badge/Nuxt%20Content-3-00DC82?logo=nuxt&labelColor=020420)](https://content.nuxt.com)

Portfolio personal construido con Nuxt 4 y Nuxt UI. Presenta mi experiencia como Senior Web Developer desde Bogotá, Colombia.

## Tech Stack

- **Framework:** Nuxt 4
- **UI:** Nuxt UI 4 + Tailwind CSS
- **Contenido:** Nuxt Content 3 (YAML + Markdown)
- **Animaciones:** Motion-V
- **Utilidades:** VueUse
- **SEO:** nuxt-og-image
- **Imágenes:** @nuxt/image
- **Linting:** ESLint con @nuxt/eslint

## Funcionalidades

- Hero con galería de imágenes tipo polaroid
- Sección "Sobre Mí" y experiencia laboral
- Carrusel de testimonios con autoplay
- Preguntas frecuentes (FAQ) por categorías
- Blog con Nuxt Content (Markdown)
- Página de proyectos
- Modo claro/oscuro
- Generación automática de imágenes OG
- Sitio estático pre-renderizado (SSG)
- Diseño responsivo

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing con hero, about, experiencia, testimonios y FAQ |
| `/about` | Información personal detallada |
| `/projects` | Portafolio de proyectos |
| `/speaking` | Charlas y presentaciones |
| `/blog` | Listado de artículos |
| `/blog/:slug` | Artículo individual |

## Estructura del proyecto

```
app/
├── components/
│   ├── landing/          # Hero, About, WorkExperience, Testimonials, FAQ
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── ColorModeButton.vue
│   └── PolaroidItem.vue
├── pages/                # Rutas de la aplicación
└── assets/css/           # Estilos globales
content/
├── index.yml             # Contenido de la landing
└── blog/                 # Artículos en Markdown
public/
├── hero/                 # Imágenes del hero
└── testimonials/         # Fotos de testimonios
```

## Setup

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Inicia el servidor en `http://localhost:3000`.

## Producción

```bash
pnpm build
```

Preview local del build:

```bash
pnpm preview
```

## Linting

```bash
pnpm lint        # Verificar
pnpm lint:fix    # Corregir automáticamente
```
