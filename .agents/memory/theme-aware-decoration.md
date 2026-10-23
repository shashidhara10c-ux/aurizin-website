---
name: Theme-aware decorative backgrounds & glass
description: Why full-page decorative backgrounds and glassmorphism must be gated on dark/light or the theme toggle appears broken
---

# Theme-aware decoration (Aurizin)

Decorative layers that use **hardcoded colors** (e.g. a fixed full-viewport background gradient in deep navy) or **fixed-alpha glass** (`bg-white/[0.03]`, `border-white/10`) do NOT respond to the light/dark toggle. When such a layer covers the page, toggling the theme only visibly changes elements built on theme tokens (the header), so the user reports "theme only works for the header."

**Why:** next-themes toggles a `.dark` class on `<html>`; only classes using theme tokens (`bg-background`, `bg-card`, `border-border`, `text-foreground`) or explicit `dark:` variants react. Raw hex / white-alpha utilities render identically in both modes.

**How to apply:** For any decorative background or glass surface, provide a light base + a `dark:` override, e.g. `bg-card/70 dark:bg-white/[0.03]`, `border-border dark:border-white/10`. For a full background component, render two stacks: light layers wrapped in `dark:hidden`, dark layers wrapped in `hidden dark:block`. Verify light mode by temporarily adding `forcedTheme="light"` to ThemeProvider (localStorage overrides `defaultTheme`), screenshot, then revert.
