# Accessibility Checklist

## Required for every generated site

- Visible focus states (shadcn tokens handle this)
- Form labels linked via `htmlFor` / `id`
- `aria-invalid` on invalid form fields
- Sufficient color contrast via semantic tokens (do not override with raw colors)

## Images

- Descriptive `alt` text on all content images
- Decorative images: `alt=""`

## Navigation

- Keyboard-accessible nav links
- Skip link optional for multi-section pages

## Motion

- Respect `prefers-reduced-motion` for custom animations
- Do not rely on motion alone to convey information

## Forms

- Use `Field` + `FieldLabel` pattern from shadcn
- Error messages in `FieldDescription`
- Submit button disabled state during submission

## Review

Load `web-design-guidelines` skill for automated UI audits.
