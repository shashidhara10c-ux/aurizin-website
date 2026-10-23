---
name: react-icons missing brand exports
description: Some react-icons brand glyphs do not exist due to trademark removals; known-good substitutes.
---

Some brand icons were removed from `react-icons/si` (Simple Icons) over trademark
concerns, so importing them crashes the app at runtime (invalid element type).

**Why:** Simple Icons periodically purges trademarked brand marks; react-icons
follows upstream. A name that worked in an older version may silently disappear.

**How to apply:** Do not assume `Si<Brand>` exists. Known missing + substitutes:
- `SiAmazonaws` → `FaAws` (react-icons/fa)
- `SiVscode` → `VscVscode` (react-icons/vsc)
- Java → `DiJava` (react-icons/di)
- React Native → `TbBrandReactNative` (react-icons/tb)
Verify any brand icon import resolves before shipping; a quick typecheck won't
catch it (named export is `undefined` at runtime, not a type error).
