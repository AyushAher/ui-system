# @aerovia/tokens

Design tokens for the Aerovia UI system. The token package exports plain JavaScript objects that can be consumed by stylesheets, CSS-in-JS, or component code.

## Available tokens

- `colors` – brand and neutral colors
- `spacing` – spacing scale (`xs`, `sm`, `md`, `lg`)
- `radii` – border-radius values

Example usage:

```ts
import { colors, spacing } from "@aerovia/tokens";

const style = {
  backgroundColor: colors.brand.primary,
  padding: spacing.md,
};
```
