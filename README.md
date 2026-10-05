# VED4 Santiago: plataforma web

Plataforma oficial de la **Vanguardia Estudiantil Dominicana (VED4), Recinto UASD Santiago**. Construida con Next.js 14 (App Router), TypeScript y Tailwind CSS.

## Qué incluye

- Identidad, valores, propósito y logros de la VED4 (contenido del brochure).
- **Pensum por facultad**: carreras agrupadas por Facultad y Escuela, con enlace al pensum oficial de cada una en el portal de la UASD.
- **Simulador curricular**: calcula cuántos períodos faltan, la fecha estimada de término y el desglose de carga académica.
- **Centro de becas y procesos**: admisión, becas, trámites y grupos estudiantiles, con buscador.
- **Galería** con 49 fotos filtrables por categoría y visor ampliado.
- Canales de comunidad: WhatsApp de Nuevo Ingreso e Instagram `@ved4santiago`.

## Requisitos

- Node.js 18.18 o superior
- npm 9 o superior

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Compilar para producción

```bash
npm run typecheck
npm run build
npm run start
```

## Desplegar en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En <https://vercel.com/new> importa el repositorio. Vercel detecta Next.js automáticamente (comando de build `next build`, sin variables de entorno).
3. Pulsa **Deploy**.

También puedes usar la CLI:

```bash
npm i -g vercel
vercel --prod
```

## Estructura

```
app/                  layout, página principal y estilos globales
components/           secciones y componentes reutilizables
data/                 contenido: facultades, logros, galería, FAQ, enlaces
lib/                  tipos, utilidades y lógica del simulador
public/gallery/       fotos optimizadas (49)
public/brand/         logo y QR de Instagram
scripts/sync-planes.mjs   sincroniza data/faculties.ts con el portal de la UASD
```

## Pensum: cómo se obtienen los datos

`data/faculties.ts` sale del árbol de Planes de Grado de <https://app.uasd.edu.do/planesgrado/>. Cada carrera guarda su código, programa y plan, y el botón **Ver pensum oficial** abre la página del portal con las asignaturas por semestre.

Para refrescar o completar el listado (por ejemplo, la Facultad de Ingeniería y Arquitectura):

```bash
npm run sync:planes
```

El script lee el portal y reescribe `data/faculties.ts`. Si lo ejecutas, elimina la entrada correspondiente de `pendingFaculties` en `data/site.ts`.

## Personalizar

- Enlaces de comunidad: `data/site.ts`.
- Logros y datos de las tarjetas: `data/achievements.ts`.
- Preguntas frecuentes: `data/faq.ts`.
- Fotos: reemplaza los archivos de `public/gallery/` y ajusta `data/gallery.ts` (ruta, texto alternativo, categoría y dimensiones).
