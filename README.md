# Base UI Registry

Registry de [shadcn/ui](https://ui.shadcn.com/docs/registry) con componentes accesibles construidos sobre [Base UI](https://base-ui.com/) y estilizados con Tailwind CSS v4.

## Componentes incluidos

- `base-ui`: tokens, `globals.css` y la utilidad `cn`.
- `button`, `input`, `checkbox`, `dialog`, `select`.

## Desarrollo

```bash
bun install
bun run registry:validate
bun run registry:build
```

El build genera `public/r/registry.json` y un archivo JSON por componente. Publica `public` en tu hosting estático o sírvelo desde una aplicación web.

## Consumo

Tras desplegarlo, registra la URL usando el namespace que quieras:

```bash
bunx shadcn@latest registry add @uchile=https://tu-dominio.cl/r/{name}.json
bunx shadcn@latest add @uchile/base-ui
bunx shadcn@latest add @uchile/button @uchile/dialog
```

Instala primero `base-ui`: entrega los tokens Tailwind y `@/lib/utils`, requeridos por los demás componentes. El proyecto consumidor debe usar Tailwind CSS v4.

## Agregar un componente

1. Crea el archivo en `registry/base-ui/components/`.
2. Agrega su item y dependencias en `registry.json`.
3. Ejecuta `bun run registry:validate && bun run registry:build`.

No uses dependencias de Radix: las primitivas deben importarse desde `@base-ui/react/*`.
