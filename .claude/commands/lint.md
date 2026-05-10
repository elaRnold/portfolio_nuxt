Ejecuta el pipeline de calidad del proyecto y reporta los resultados.

1. `pnpm lint` — ESLint con reglas de @nuxt/eslint (sin comma-dangle, brace-style 1tbs)
2. `pnpm typecheck` — vue-tsc sobre todos los archivos .vue y .ts

Por cada error: muestra ruta, número de línea, explicación en lenguaje simple y fix mínimo.
Si $ARGUMENTS contiene "fix", ejecuta primero `pnpm lint:fix` antes de reportar.

$ARGUMENTS
