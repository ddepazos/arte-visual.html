# Arte Visual — React

Galería de arte y experimentación generativa de Diego Pazos.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- Root directory: `react-app`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Suggested project name: `arte-visual`

## Archivos de video

Copiar los seis archivos originales a `react-app/public/media/` conservando sus nombres. Los videos se proporcionaron en la conversación; **aún no están cargados al repositorio ni a Cloudflare**. La interfaz muestra un estado temporal hasta que estén disponibles. Para piezas grandes se recomienda Cloudflare R2 o Stream en vez de Git LFS. No cambiar la ruta del video sin actualizar `src/main.jsx`.

La versión HTML histórica de la raíz permanece sin alterar hasta validar el despliegue React.
