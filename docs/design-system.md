# Awtad Energy Design System

## Design Intent
Awtad Energy should feel like a Gulf infrastructure brand with renewable intelligence, not a generic clean-tech startup. The system balances warm mineral surfaces, deep maritime tones, controlled copper heat and precise typography to create a premium, regionally grounded character.

The visual language should communicate:
- infrastructure-grade seriousness
- long-term performance
- environmental intelligence
- Oman-specific climatic and geographic relevance
- image-led sophistication without visual noise

## 1. Color Palette

### Core Brand Palette
| Token | Hex | Role |
| --- | --- | --- |
| Deep Tide | `#11232D` | Primary brand ink, headings, dark surfaces |
| Gulf Teal | `#0F6666` | Primary action color, renewable signal, system accents |
| Basin Blue | `#0E3744` | Secondary dark tone, footer, hero gradients |
| Salt Slate | `#44555D` | Secondary text, labels, technical copy |
| Limestone | `#F3EEE6` | Main site background |
| Sand Light | `#FBF8F3` | Elevated light surface |
| Dune Beige | `#E6D7BE` | Soft section background and divider tone |
| Copper Heat | `#C57F4B` | Regional warmth, premium accent, selected UI emphasis |
| Sun Metal | `#F3BD6A` | Highlight tone for overlays, chips and luminous details |
| Mist Grey | `#9AB1AF` | Neutral cool support tone for charts, borders and diagrams |
| White | `#FFFFFF` | Cards, foreground text on dark UI, overlays |

### Functional UI Palette
| Use | Hex |
| --- | --- |
| Text Primary | `#11232D` |
| Text Secondary | `#44555D` |
| Text Muted | `#6B7A82` |
| Border Light | `rgba(17, 35, 45, 0.12)` |
| Border Strong | `rgba(17, 35, 45, 0.18)` |
| Border Inverse | `rgba(255, 255, 255, 0.12)` |
| Surface Glass | `rgba(255, 255, 255, 0.62)` |
| Surface Strong | `rgba(255, 255, 255, 0.80)` |
| Overlay Dark | `rgba(17, 35, 45, 0.52)` |
| Overlay Teal | `rgba(15, 102, 102, 0.24)` |
| Focus Ring | `rgba(15, 102, 102, 0.40)` |

### Color Usage Rules
1. Use teal as a disciplined action color, not as a background default everywhere.
2. Use copper and sun tones sparingly for heat, emphasis and premium cues.
3. Keep the base canvas warm and mineral, never sterile white.
4. Avoid bright eco-green as a dominant brand tone.
5. Dark sections should feel engineered and atmospheric, not tech-startup neon.

## 2. Typography Pairing

### Primary Pairing
| Role | Typeface | Use |
| --- | --- | --- |
| Display / Headings | `League Spartan` | Hero titles, section titles, stat values, card headings |
| Body / Interface | `Manrope` | Paragraphs, labels, navigation, buttons, forms |
| Arabic Support | `IBM Plex Sans Arabic` | Arabic wordmarks, bilingual accents, future RTL support |

### Typography Character
- `League Spartan` gives compressed, confident, infrastructural authority.
- `Manrope` keeps the interface modern, clean and legible without looking generic.
- `IBM Plex Sans Arabic` introduces regional compatibility without becoming ornamental.

### Type Scale
| Token | Size | Use |
| --- | --- | --- |
| Display XL | `clamp(3rem, 7vw, 6.4rem)` | Homepage hero |
| Display L | `clamp(2.8rem, 6vw, 5.6rem)` | Inner-page hero |
| Section Title | `clamp(2.2rem, 5vw, 4.4rem)` | Major section headings |
| Card Heading | `1.4rem` | Cards and content blocks |
| Body L | `1.08rem` | Intro paragraphs |
| Body M | `1rem` | Standard content |
| Small Label | `0.94rem` | Form labels and utility text |
| Eyebrow | `0.78rem` | Section markers |
| Meta | `0.84rem` | Tags, article meta, supporting labels |

### Typography Rules
1. Headings are uppercase or near-uppercase, tightly tracked, with short lines.
2. Body copy remains sentence case and highly readable.
3. Avoid mixing more than these three typefaces.
4. Use Arabic sparingly as an accent unless a full bilingual version is produced.

## 3. Spacing System

### Base Unit
Use an **8px-based spacing system** with selective 4px adjustments for micro-alignment.

### Scale
| Token | Value |
| --- | --- |
| `space-1` | `0.25rem` / 4px |
| `space-2` | `0.5rem` / 8px |
| `space-3` | `0.75rem` / 12px |
| `space-4` | `1rem` / 16px |
| `space-5` | `1.25rem` / 20px |
| `space-6` | `1.5rem` / 24px |
| `space-8` | `2rem` / 32px |
| `space-10` | `2.5rem` / 40px |
| `space-12` | `3rem` / 48px |
| `space-16` | `4rem` / 64px |
| `space-20` | `5rem` / 80px |
| `space-24` | `6rem` / 96px |

### Layout Rules
| Use | Recommended Spacing |
| --- | --- |
| Page section padding | `4.5rem` to `6rem` vertical |
| Hero top spacing | `3.5rem` to `4rem` |
| Card padding | `1.4rem` to `1.5rem` |
| Grid gaps | `1rem` to `1.25rem` |
| CTA banner padding | `2rem` |
| Button gap in button rows | `0.9rem` |

### Spacing Character
The system should feel generous and editorial, not cramped. White space is a brand signal here: it implies confidence and discipline.

## 4. Button Styles

### Primary Button
**Purpose:** primary CTA, header action, major conversion moments  
**Style:**
- background: `linear-gradient(135deg, #0F6666 0%, #0E3744 100%)`
- text: `#FFFFFF`
- radius: `999px`
- min height: `3.25rem`
- font weight: `800`
- shadow: soft, controlled, not glossy

### Secondary Button
**Purpose:** secondary navigation, explore actions, contextual CTA  
**Style:**
- background: `rgba(255, 255, 255, 0.62)`
- border: `1px solid rgba(17, 35, 45, 0.18)`
- text: `#11232D`
- backdrop blur allowed on light backgrounds

### Ghost Button
**Purpose:** dark-section CTAs, footer or hero overlays  
**Style:**
- transparent or low-opacity white fill
- `1px` inverse border
- white text
- no heavy shadow

### Button Rules
1. Buttons should feel like executive controls, not playful chips.
2. Keep corner radius fully pill-shaped for premium softness.
3. Never use bright green fills or generic SaaS blue gradients.
4. Limit the site to three button families.

## 5. Card Styles

### Core Card Language
Cards should feel like engineered surfaces: soft, elevated, precise and image-capable.

### Standard Content Card
- background: `rgba(255,255,255,0.80)`
- border: `1px solid rgba(17,35,45,0.08)`
- radius: `1.5rem`
- shadow: `0 18px 42px rgba(17,35,45,0.12)`
- padding: `1.4rem`

### Image Card
- inherits standard card shell
- image or image-like scene on top
- copy block below
- label lockup sits inside image area near bottom-left

### Dark Card
- used inside dark sections
- low-opacity light overlay
- inverse border
- minimal shadow or no shadow

### Metric / Proof Card
- tighter padding
- stronger number or heading hierarchy
- use display face for values
- restrained supporting text

### Card Rules
1. Use rounded corners consistently across all card families.
2. Avoid thin-line-only flat cards that feel too software-like.
3. Use image cards heavily on landing pages and project pages.
4. Never overfill cards with too much body copy.

## 6. Icon Style Direction

### Icon Character
Icons should look infrastructural and diagrammatic rather than friendly app icons.

### Style Rules
- stroke-based or duotone line icons
- medium stroke weight
- simplified industrial geometry
- rounded joins, not playful curves
- minimal fill use
- use teal, slate or white depending on surface

### Appropriate Subjects
- solar array grid
- wind rotor silhouette
- battery module stack
- containerized unit
- grid interface
- controls and monitoring
- inspection / service response
- infrastructure nodes / network diagrams

### Avoid
- emoji-like energy icons
- leaf-heavy “green” symbolism
- oversimplified SaaS dashboard glyphs
- glossy 3D app-style icons

## 7. Background Treatment

### Base Background System
The site should not sit on flat white. Backgrounds should feel atmospheric, mineral and site-aware.

### Light Sections
- base: `#F3EEE6` to `#FBF8F3`
- subtle warm gradients
- occasional soft dune overlays
- controlled contrast so content remains crisp

### Dark Sections
- base: `#11232D` to `#0C1920`
- radial warmth with `#F3BD6A` in small doses
- deep teal transitions for renewable/technical identity

### Textured Motifs
Allowed:
- topographic contour lines
- grid overlays
- horizon bands
- modular block repetition
- fine technical linework

Avoid:
- noisy grain
- loud abstract blobs
- generic mesh gradients
- startup-style aurora effects

## 8. Section Dividers

### Divider Direction
Section transitions should feel deliberate and architectural.

### Recommended Divider Types
| Divider Type | Use |
| --- | --- |
| Tonal shift | Light mineral surface to soft dune surface |
| Dark band break | For delivery architecture, editorial emphasis, credibility sections |
| Image-led edge | Use a full-width image or atmospheric block to reset rhythm |
| Contour line divider | Thin technical line or horizon motif between sections |
| Gradient seam | Very soft warm-to-dark or dark-to-light fade between narrative phases |

### Rules
1. Avoid simple straight gray rules as the primary section divider.
2. Let section changes be felt through surface, image or tone.
3. Use at most one strong divider concept per adjacent section transition.

## 9. Image Treatment and Overlay System

### Overall Image Philosophy
Images are not decorative. They should carry geography, scale, atmosphere and commercial seriousness.

### Image Style
- wide cinematic compositions
- large sky or terrain fields for copy space
- industrial realism
- low to medium saturation
- strong natural light with heat or marine atmosphere
- focus on site context, not smiling office teams

### Priority Subject Matter
- Oman-like coastline, ports and industrial edges
- desert and mountain terrain with infrastructure cues
- solar field geometry
- wind exposure landscapes
- battery and modular equipment detail
- maintenance and inspection moments, used sparingly

### Overlay System
| Layer | Purpose |
| --- | --- |
| Dark gradient overlay | Improve headline legibility |
| Teal tint overlay | Tie imagery into brand system |
| Copper warmth edge | Add premium Gulf warmth to highlights |
| Label panel | Display image title and short descriptor |
| Grid or line overlay | Reinforce technical / infrastructural feel |

### Overlay Recipe
Use a two-layer system on hero and card images:
1. **Legibility layer:** `linear-gradient(180deg, rgba(17,35,45,0.12), rgba(17,35,45,0.55))`
2. **Brand layer:** subtle teal or copper radial tint at one corner

### Image Rules
1. Never use overly bright green grading.
2. Avoid cliché renewable imagery with generic globe or leaf overlays.
3. Preserve physical realism and material texture.
4. Crop with intent: wide masters, vertical derivatives, copy-safe zones.

## 10. Hover Effects

### Interaction Character
Hover effects should feel restrained, premium and mechanical. No bouncy SaaS motion.

### Recommended Effects
| Element | Hover Treatment |
| --- | --- |
| Primary button | slight upward shift, shadow deepen, gradient tighten |
| Secondary button | border darkens, background opacity increases |
| Card | subtle lift `translateY(-2px to -4px)`, shadow deepen slightly |
| Text link | arrow shift or underline reveal |
| Image card | overlay intensifies slightly, image scales by `1.01` to `1.03` max |
| Nav link | underline grow animation or color deepen |

### Motion Rules
- duration: `180ms` to `260ms`
- easing: smooth standard ease
- avoid elastic movement
- never combine scale, rotate and heavy shadow on the same hover

## 11. Accessibility Guidance

### Contrast
1. Maintain WCAG AA contrast minimums for all body text.
2. Avoid copper or sun tones for small text on light surfaces.
3. Use white text only on sufficiently dark overlays or backgrounds.

### Type and Readability
1. Keep body text at `16px` minimum equivalent.
2. Limit line length for intros and dense paragraphs.
3. Avoid all-caps for long body copy.
4. Preserve generous line-height for body text, around `1.5` to `1.6`.

### Motion
1. Keep reveal animations subtle.
2. Respect reduced motion preferences in production implementation.
3. Do not hide critical information in hover-only states.

### Interaction
1. Provide visible focus states on all links, buttons and form fields.
2. Ensure keyboard access to navigation, cards used as links and form controls.
3. Touch targets should be at least `44px` high on mobile.

### Image Accessibility
1. Use descriptive alt text for meaningful imagery.
2. Treat purely atmospheric shapes or background textures as decorative.
3. Do not place essential text directly inside complex image areas without sufficient overlay support.

### Form Accessibility
1. Always pair labels with fields.
2. Do not rely on placeholder text alone.
3. Use clear error and success feedback with color plus text.

## What To Avoid
- bright eco-green as the main brand color
- glassmorphism-heavy SaaS UI
- thin-line startup dashboard aesthetics
- generic corporate stock with handshakes or meeting rooms
- glossy 3D icons
- white-and-green “sustainability template” patterns
- random purple or neon gradients
- playful microinteractions that weaken the infrastructure tone

## Practical Implementation Notes
For production, the design system should be translated into:
- semantic color tokens in CSS
- type tokens and heading classes
- spacing and layout tokens
- reusable card and button components
- image-overlay utility classes
- motion tokens for hover and reveal behavior
- accessibility checks after final photography is introduced

## File Alignment
This design system aligns directly with:
- [styles.css](C:/Users/DELL/Desktop/ocean%20enery%202.0/assets/styles.css)
- [strategy.md](C:/Users/DELL/Desktop/ocean%20enery%202.0/docs/strategy.md)

