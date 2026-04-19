# Comprehensive Codebase Analysis Report

## 1. IMAGE USAGE ANALYSIS

### Available Images in `/public/images/`
```
Hero Images (SVG):
- hero-about.svg
- hero-contact.svg
- hero-home.svg
- hero-industries.svg
- hero-projects.svg
- hero-solutions.svg
- hero-sustainability.svg

Photo Images (JPG):
- photo-bess.jpg (Battery Energy Storage)
- photo-engineer.jpg (Engineering/Consultancy)
- photo-port-containers.jpg (Port/Logistics - UNUSED)
- photo-port.jpg (Port/Logistics)
- photo-solar-farm.jpg (Large Solar Installation)
- photo-solar-technician.jpg (Solar Maintenance)
- photo-solar.jpg (Standard Solar)
- photo-wind-farm.jpg (Wind Farm/Hybrid)
- photo-wind.jpg (Wind Turbines)
- test-unsplash.jpg (TEST IMAGE - UNUSED/REMOVED)
```

### Solution Pages - Hero & Split Section Images

| Solution | Hero Image | Hero Label | Split Image | Split Label | Notes |
|----------|-----------|-----------|------------|------------|-------|
| **Solar PV** | `/images/photo-solar.jpg` | "Efficient Solar Generation" | `/images/photo-solar.jpg` | "Professional Solar Implementation" | ✓ Consistent |
| **Wind Energy** | `/images/photo-wind.jpg` | "Professional Wind Energy" | `/images/photo-wind.jpg` | "Utility-Scale Wind Installation" | ✓ Consistent, reversed layout |
| **Hybrid Systems** | `/images/photo-solar-farm.jpg` | "Integrated Energy Systems" | `/images/photo-solar-farm.jpg` | "Complete Hybrid Solution" | ✓ Consistent |
| **Battery Storage** | `/images/photo-bess.jpg` | "Advanced Storage Technology" | `/images/photo-bess.jpg` | "Modern BESS Implementation" | ✓ Consistent, reversed layout |
| **Design Consultancy** | `/images/photo-engineer.jpg` | "Expert Engineering Design" | `/images/photo-engineer.jpg` | "Professional Consultation" | ✓ Consistent |
| **Operation & Maintenance** | `/images/photo-solar-technician.jpg` | "Professional Asset Management" | `/images/photo-solar-technician.jpg` | "Professional Service Excellence" | ✓ Consistent, reversed layout |

**File References:**
- [Solar PV hero](src/app/solutions/solar-pv/page.tsx#L43)
- [Wind Energy hero](src/app/solutions/wind-energy/page.tsx#L41)
- [Hybrid Systems hero](src/app/solutions/hybrid-systems/page.tsx#L31)
- [Battery Storage hero](src/app/solutions/battery-storage/page.tsx#L41)
- [Design Consultancy hero](src/app/solutions/design-consultancy/page.tsx#L39)
- [Operation & Maintenance hero](src/app/solutions/operation-maintenance/page.tsx#L43)

### ⚠️ CRITICAL ISSUE: Related Solutions Images - INCORRECT REFERENCES

**Solar PV Related Solutions** [src/app/solutions/solar-pv/page.tsx#L10-L22](src/app/solutions/solar-pv/page.tsx#L10-L22)
```
Line 13: "Hybrid Systems" → imageSrc: "/images/photo-wind-farm.jpg" ✓ CORRECT
Line 16: "Battery Storage" → imageSrc: "/images/photo-bess.jpg" ✓ CORRECT
Line 19: "Design & Consultancy" → imageSrc: "/images/photo-engineer.jpg" ✓ CORRECT
```

**Wind Energy Related Solutions** [src/app/solutions/wind-energy/page.tsx#L10-L22](src/app/solutions/wind-energy/page.tsx#L10-L22)
```
Line 10: "Hybrid Systems" → imageSrc: "/images/photo-solar.jpg" ✓ CORRECT
Line 13: "Battery Storage" → imageSrc: "/images/photo-bess.jpg" ✓ CORRECT
Line 16: "Design & Consultancy" → imageSrc: "/images/photo-engineer.jpg" ✓ CORRECT
```

**Hybrid Systems Related Solutions** [src/app/solutions/hybrid-systems/page.tsx#L10-L21](src/app/solutions/hybrid-systems/page.tsx#L10-L21)
```
Line 11: "Solar PV" → imageSrc: "/images/photo-solar.jpg" ✓ CORRECT
Line 15: "Wind Energy" → imageSrc: "/images/photo-wind.jpg" ✓ CORRECT
Line 19: "Battery Storage" → imageSrc: "/images/photo-bess.jpg" ✓ CORRECT
```

**Battery Storage Related Solutions** [src/app/solutions/battery-storage/page.tsx#L10-L22](src/app/solutions/battery-storage/page.tsx#L10-L22)
```
Line 10: "Solar PV" → imageSrc: "/images/photo-solar.jpg" ✓ CORRECT
Line 13: "Wind Energy" → imageSrc: "/images/photo-wind.jpg" ✓ CORRECT
Line 16: "Hybrid Systems" → imageSrc: "/images/photo-wind-farm.jpg" ✓ CORRECT
```

**Design Consultancy Related Solutions** [src/app/solutions/design-consultancy/page.tsx#L10-L22](src/app/solutions/design-consultancy/page.tsx#L10-L22)
```
Line 10: "Solar PV" → imageSrc: "/images/photo-solar.jpg" ✓ CORRECT
Line 13: "Wind Energy" → imageSrc: "/images/photo-wind.jpg" ✓ CORRECT
Line 16: "Hybrid Systems" → imageSrc: "/images/photo-wind-farm.jpg" ✓ CORRECT
```

**Operation & Maintenance Related Solutions** [src/app/solutions/operation-maintenance/page.tsx#L10-L22](src/app/solutions/operation-maintenance/page.tsx#L10-L22)
```
Line 10: "Solar PV" → imageSrc: "/images/photo-solar.jpg" ✓ CORRECT
Line 13: "Wind Energy" → imageSrc: "/images/photo-wind.jpg" ✓ CORRECT
Line 16: "Battery Storage" → imageSrc: "/images/photo-bess.jpg" ✓ CORRECT
```

### Image Repetition Analysis

**Highly Repetitive Images:**
1. **photo-solar.jpg** - Used 10+ times across multiple pages
2. **photo-engineer.jpg** - Used 8+ times (About, Contact, Sustainability, Consultancy pages, etc.)
3. **photo-wind.jpg** - Used 6+ times
4. **photo-bess.jpg** - Used 5+ times
5. **photo-wind-farm.jpg** - Used 4+ times (hybrid systems, featured sections)
6. **photo-port.jpg** - Used 3 times (Industries, Projects pages)

---

## 2. HERO IMAGES ACROSS ALL PAGES

### Pages With Hero Images ✓
| Page | Route | Hero Image | Issues |
|------|-------|-----------|--------|
| Home | `/` | `/images/hero-home.svg` | ✓ None |
| About | `/about` | `/images/photo-engineer.jpg` | ✓ None |
| Solutions | `/solutions` | None - Uses Solution Explorer | ⚠️ No static hero |
| Contact | `/contact` | `/images/photo-engineer.jpg` | ✓ None |
| Industries | `/industries` | `/images/photo-port.jpg` | ✓ None |
| Projects | `/projects` | `/images/photo-port.jpg` | ✓ Repetitive (same as Industries) |
| Sustainability | `/sustainability` | `/images/photo-engineer.jpg` | ✓ Repetitive (same as About, Contact) |

**File References:**
- [Home page hero](src/app/page.tsx#L50-L58)
- [About page hero](src/app/about/page.tsx#L22-L28)
- [Industries page hero](src/app/industries/page.tsx#L42-L51)
- [Projects page hero](src/app/projects/page.tsx#L38-L47)
- [Sustainability page hero](src/app/sustainability/page.tsx#L35-L43)
- [Contact page hero](src/app/contact/page.tsx#L30-L36)
- [Solutions page - NO HERO](src/app/solutions/page.tsx#L1) (Uses SolutionExplorer instead)

### ⚠️ Missing Hero Image
**Solutions Page** [src/app/solutions/page.tsx](src/app/solutions/page.tsx) 
- Does NOT use PageHero component
- Uses `SolutionExplorer` component instead with dynamic images
- No static hero image at top of page
- **Note:** This is intentional design choice (interactive explorer pattern)

---

## 3. COMPONENT IMAGE HANDLING ISSUES

### PageHero Component [src/components/page-hero.tsx](src/components/page-hero.tsx)
**Properly Implemented:**
- Requires `imageSrc` prop [Line 14](src/components/page-hero.tsx#L14)
- Uses Next.js `Image` component with proper responsive props [Line 31-38](src/components/page-hero.tsx#L31-L38)
- Implements responsive heights: `h-[600px] md:h-[800px]`
- Has dark gradient overlays for text readability [Line 40-43](src/components/page-hero.tsx#L40-L43)
- `sizes="100vw"` for full viewport coverage
- Uses `fill` with `object-cover` for proper image scaling
- **No missing imageSrc attributes** - All solution and main pages provide this prop

**Mobile Height Issue:**
- Mobile: `h-[600px]` (fixed)
- Desktop: `md:h-[800px]` (fixed)
- **Better approach:** Use `clamp()` or more granular breakpoints for tablet sizes

### SplitSection Component [src/components/content-blocks.tsx#L150-L202](src/components/content-blocks.tsx#L150-L202)
**Properly Implemented:**
- Requires `imageSrc` prop [Line 136](src/components/content-blocks.tsx#L136)
- Uses Next.js `Image` component correctly [Line 164-169](src/components/content-blocks.tsx#L164-L169)
- Proper responsive sizing: `sizes="(min-width: 1024px) 44vw, 100vw"`
- Uses `fill` with `object-cover`
- Includes image label at bottom [Line 168](src/components/content-blocks.tsx#L168)
- Has optional `reverse` prop to swap layout [Line 202](src/components/content-blocks.tsx#L202)
- **All solution pages provide imageSrc** - No missing attributes
- **Mobile behavior:** Image displays full-width on mobile, beside text on desktop (grid layout)

### FeatureGridSection Component [src/components/content-blocks.tsx#L47-L116](src/components/content-blocks.tsx#L47-L116)
**Image Handling:**
- Has optional `imageSrc` prop [Line 19](src/components/content-blocks.tsx#L19)
- Only renders image container if `imageSrc` exists [Line 92](src/components/content-blocks.tsx#L92)
- Responsive grid: `md:grid-cols-2 xl:grid-cols-3` (adjusts based on `columns` prop)
- Mobile image height: `h-56` (224px) fixed height
- **Issue:** Fixed height on mobile might crop images awkwardly
- Uses proper hover scale effect: `group-hover:scale-110` [Line 100](src/components/content-blocks.tsx#L100)

### SolutionExplorer Component [src/components/solution-explorer.tsx](src/components/solution-explorer.tsx)
**Image Handling:**
- Desktop view (lg): Height `min-h-[560px]` with overlaid content [Line 113-135](src/components/solution-explorer.tsx#L113-L135)
- Mobile view: Images are interactive/collapsible [Line 140-181](src/components/solution-explorer.tsx#L140-L181)
- Mobile image height: `h-52` (208px) fixed height when expanded
- Properly sized with `fill` and `object-cover`
- Interactive active state tracking works correctly
- **No missing images** - All items in explorer have `imageSrc`

---

## 4. SOLUTIONS DROPDOWN NAVIGATION ISSUE

### Site Header Component [src/components/site-header.tsx](src/components/site-header.tsx)

**Problem Location:** Desktop Dropdown [Lines 55-70](src/components/site-header.tsx#L55-L70)

```jsx
<div className="pointer-events-none absolute left-1/2 top-full z-20 mt-5 hidden w-[340px] -translate-x-1/2 rounded-[1.6rem] border border-[rgba(22,49,59,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_26px_60px_rgba(22,49,59,0.16)] backdrop-blur-xl transition duration-200 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:block group-focus-within:opacity-100">
```

**Issues Identified:**

1. **Pointer-Events Timing Gap** [Line 56](src/components/site-header.tsx#L56)
   - Uses `pointer-events-none` by default with `group-hover:pointer-events-auto`
   - Problem: Small gap between navigation trigger and dropdown (mt-5 = 1.25rem/20px)
   - When cursor moves from link to dropdown, pointer-events becomes none temporarily
   - **Result:** Dropdown closes/flickers if cursor movement isn't perfectly smooth

2. **Fixed Width Constraint** [Line 57](src/components/site-header.tsx#L57)
   - `w-[340px]` is fixed width
   - Centered with `-translate-x-1/2` 
   - On smaller desktops/tablets, might extend beyond viewport

3. **No Visible Hover Target Area**
   - Gap between trigger link and dropdown content
   - Solution links inside dropdown [Lines 62-71](src/components/site-header.tsx#L62-L71) are small `py-3`
   - No padding above first item to bridge the gap

4. **Mobile Dropdown** [Lines 79-102](src/components/site-header.tsx#L79-L102)
   - Works correctly with explicit click handling
   - Nested children render properly in collapsed menu
   - No pointer-events issues here

**Recommended Fixes:**
- Remove `mt-5` gap or add invisible bridge element
- Use `group-hover:pointer-events-auto` on parent to keep dropdown accessible
- Add padding above first dropdown item
- Consider using `mt-0` and letting background extend to trigger element

---

## 5. MOBILE RESPONSIVENESS ISSUES

### globals.css Breakpoints [src/app/globals.css#L211-L300](src/app/globals.css#L211-L300)

**Defined Breakpoints:**
```css
@media (max-width: 768px) { /* Mobile/Tablet */
  ...font size adjustments...
}

@media (max-width: 480px) { /* Small mobile */
  ...additional reductions...
}
```

**Issues Found:**

1. **Missing Intermediate Breakpoint**
   - Gap between 768px (tablet) and 480px (mobile)
   - No specific handling for 600px-760px range (small tablets)

2. **Fixed Heights in Image Components**
   
   **PageHero** [src/components/page-hero.tsx#L32-L33](src/components/page-hero.tsx#L32-L33)
   ```jsx
   <div className="absolute inset-0 h-[600px] md:h-[800px]">
   ```
   - Mobile: 600px fixed (good)
   - Tablet (md): 800px (but md breakpoint is 768px)
   - **Issue:** No adjustment between 480px and 768px

3. **FeatureGridSection Image Height** [src/components/content-blocks.tsx#L93-L94](src/components/content-blocks.tsx#L93-L94)
   ```jsx
   <div className="relative h-56 overflow-hidden">
   ```
   - Always 224px (56 * 4px) - never changes
   - **Issue:** On 480px screens with images, cards become narrow and tall

4. **SplitSection Layout** [src/components/content-blocks.tsx#L152](src/components/content-blocks.tsx#L152)
   ```jsx
   <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
   ```
   - Mobile: Single column, full-width image (`min-h-[360px]`)
   - Desktop (lg): 2 columns side-by-side
   - **Good responsive behavior** ✓

5. **SolutionExplorer Mobile View** [src/components/solution-explorer.tsx#L140](src/components/solution-explorer.tsx#L140)
   ```jsx
   <div className="mt-8 grid gap-4 lg:hidden">
   ```
   - Hidden on lg+ screens, shows mobile version ✓
   - Mobile images: fixed `h-52` (208px)
   - **Issue:** No variation for different mobile sizes

### Specific Mobile Responsiveness Problems:

**Problem 1: Horizontal Image Overflow**
- FeatureGridSection uses `md:grid-cols-2 xl:grid-cols-3`
- On tablets (768px-1023px): 2 columns, images are 50vw wide = very tall with fixed 224px height
- **Aspect ratio:** Becomes ~2:1 instead of natural ratio

**Problem 2: PageHero Text Overflow on Small Mobile**
- `text-[clamp(2.5rem,6vw,5.5rem)]` for title
- At 480px: ~2.8rem = OK
- But globals.css sets `h1 { font-size: clamp(1.8rem, 5vw, 3rem) !important; }` [Line 221](src/app/globals.css#L221)
- **Conflict:** Inline clamp() vs global CSS !important rules

**Problem 3: Dropdown Navigation on Mobile**
- Solutions dropdown uses `lg:flex` for desktop [Line 33](src/components/site-header.tsx#L33)
- Mobile menu works differently (explicit children rendering)
- But width constraints might cause issues on landscape mode (828px screens)

---

## 6. SUMMARY OF FINDINGS

### Issues by Category:

#### ✅ Working Correctly:
- All main pages have hero images (except Solutions which intentionally uses explorer)
- All solution pages have consistent hero + split images
- PageHero component properly displays images
- SplitSection component properly displays images
- Mobile navigation menu handles dropdowns correctly
- Image alt text is provided throughout

#### ⚠️ Non-Critical Issues:
- **Image Repetition:** Same few images reused excessively across pages
- **Missing Tablet Breakpoint:** No CSS rules for 600px-767px range
- **Fixed Image Heights:** FeatureGridSection uses fixed h-56 that doesn't scale
- **Dropdown Gap:** Small pointer-events timing issue on desktop

#### 🔴 No Critical Issues Found:
- No missing imageSrc attributes in components
- No broken image paths that would cause 404s
- All responsive images use proper Next.js Image component
- No images used without proper alt text

---

## 7. RECOMMENDATIONS

### Priority 1 (Quick Wins):
1. **Fix Dropdown Pointer-Events**
   - Add `mt-0` to the dropdown div
   - Add top padding to first link item in dropdown

2. **Add Tablet Image Sizing**
   - Add `@media (max-width: 1024px)` breakpoint
   - Handle 768px-999px range specifically

### Priority 2 (Improve Consistency):
3. **Reduce Image Repetition**
   - Use `photo-port-containers.jpg` for some pages (currently unused)
   - Create/use different images for Sustainability, Contact pages
   - Diversify consultation/engineer imagery

4. **Fix FeatureGridSection Image Aspect**
   - Change from fixed `h-56` to responsive height using breakpoints
   - Consider using `aspect-video` or `aspect-square` utility

### Priority 3 (Polish):
5. **Standardize PageHero Height**
   - Use clamp() for smoother scaling: `h-[clamp(400px,100vh,800px)]`
   - Removes abrupt jump at md breakpoint

6. **Add Missing Images**
   - `photo-port-containers.jpg` is unused
   - Consider adding more sector-specific imagery
