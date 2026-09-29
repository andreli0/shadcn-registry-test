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

El build genera `public/r/registry.json` y un archivo JSON por componente. Es útil si quieres publicar un registry HTTP; para consumir este repositorio desde GitHub no es necesario generar ni desplegar esos archivos.

## Consumo

El repositorio se puede consumir directamente desde GitHub. En el proyecto consumidor, inicializa shadcn si aún no existe `components.json`:

```bash
bunx shadcn@latest init
```

Lista o inspecciona los items disponibles:

```bash
bunx shadcn@latest list andreli0/shadcn-registry-test
bunx shadcn@latest view andreli0/shadcn-registry-test/button
```

Instala cualquier componente con su dirección GitHub:

```bash
bunx shadcn@latest add andreli0/shadcn-registry-test/button
bunx shadcn@latest add andreli0/shadcn-registry-test/dialog
```

Cada componente instala automáticamente `base-ui`, que entrega los tokens Tailwind, `@/lib/utils` y Base UI. El proyecto consumidor debe usar Tailwind CSS v4. Para revisar cambios antes de escribir archivos:

```bash
bunx shadcn@latest add andreli0/shadcn-registry-test/button --dry-run
```

Valida el registry ya publicado con:

```bash
bunx shadcn@latest registry validate andreli0/shadcn-registry-test
```

## Agregar un componente

1. Crea el archivo en `registry/base-ui/components/`.
2. Agrega su item y dependencias en `registry.json`.
3. Ejecuta `bun run registry:validate && bun run registry:build`.

No uses dependencias de Radix: las primitivas deben importarse desde `@base-ui/react/*`.
