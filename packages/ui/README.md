# @aerovia/ui

This package exports headless, design-token-aware UI components for use across applications.

## Installation

From the root of the monorepo run:

```bash
pnpm install
```

Or from another project:

```bash
pnpm add @aerovia/ui @aerovia/tokens
```

(look for the correct registry/user context.)

## Button component

The `Button` component is a thin headless wrapper that can render as a `button` or a custom `span` via the `asChild` prop. It accepts all standard HTML attributes plus a couple of helpers:

- `variant` – selects a color token (`primary`, `secondary`, etc.)
- `size` – picks a spacing token for padding (`xs`, `sm`, `md`, `lg`)

The styles are derived from the design tokens in `@aerovia/tokens`, but you can override them using `className` or `style` props.

### Basic usage

```tsx
import { Button } from "@aerovia/ui";
import { colors, spacing } from "@aerovia/tokens";

export function Example() {
  return (
    <Button
      variant="primary"
      size="md"
      className="text-white rounded"
      style={{ margin: spacing.md }}
    >
      Click me
    </Button>
  );
}
```
