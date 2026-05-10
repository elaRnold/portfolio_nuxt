Revisa el componente Vue en: $ARGUMENTS

Checklist de convenciones del proyecto:
- Usa componentes de Nuxt UI (UButton, UIcon, etc.) en lugar de HTML plano donde corresponda
- Iconos con prefijo `i-lucide-*` o `i-simple-icons-*` via `<UIcon>`
- Sin datos personales hardcodeados — vienen de `app/app.config.ts`
- Datos de contenido via `queryCollection()` de @nuxt/content, no hardcodeados
- Imágenes con `<NuxtImg>` de @nuxt/image, no `<img>` nativo
- Animaciones con motion-v (MotionDiv, etc.) para efectos de scroll
- Clases Tailwind: primary `blue`, neutral `neutral`, container `max-w-6xl`

Agrupa resultados en: Problemas (corregir), Sugerencias (mejoras) y Correcto.
