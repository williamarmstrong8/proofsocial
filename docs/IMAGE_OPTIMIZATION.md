# Problem Section Image Optimization

## Overview

The Problem section images have been optimized to significantly reduce file sizes and improve scroll performance. All 19 background images used in `ProblemBackgroundImages.tsx` have been converted to WebP format and resized.

## Optimization Results

### Before Optimization
- **Total size:** ~37.7MB
- **Individual files:** 539KB - 6.4MB each
- **Formats:** Mixed (JPG, JPEG, JPG uppercase)

### After Optimization
- **Total size:** 3.8MB (90% reduction)
- **Individual files:** 46KB - 641KB each
- **Format:** WebP (quality: 75, max width: 1400px)

### Detailed Breakdown

| Image | Original Size | Optimized Size | Reduction |
|-------|--------------|----------------|-----------|
| image1 | 817KB | 68KB | 91.6% |
| image2 | 4.9MB | 297KB | 94.0% |
| image3 | 1.0MB | 180KB | 82.3% |
| image4 | 2.8MB | 121KB | 95.7% |
| image5 | 981KB | 278KB | 71.7% |
| image6 | 6.4MB | 641KB | 90.2% |
| image7 | 2.7MB | 352KB | 86.7% |
| image9 | 2.8MB | 90KB | 96.7% |
| image10 | 2.1MB | 91KB | 95.7% |
| image11 | 2.7MB | 100KB | 96.3% |
| image12 | 539KB | 71KB | 86.8% |
| image13 | 1.0MB | 358KB | 65.2% |
| image14 | 1.1MB | 287KB | 72.8% |
| image15 | 667KB | 104KB | 84.3% |
| image16 | 1.4MB | 51KB | 96.5% |
| image17 | 717KB | 67KB | 90.7% |
| image18 | 1.3MB | 390KB | 69.9% |
| image19 | 1.4MB | 46KB | 96.7% |
| image20 | 3.4MB | 218KB | 93.6% |

## Implementation Details

### Optimization Script
- **Location:** `scripts/optimize-problem-images.ts`
- **Run with:** `npm run optimize:problem-images`
- **Settings:**
  - Max width: 1400px (maintains aspect ratio)
  - WebP quality: 75
  - No enlargement of smaller images

### Updated Files
1. **`src/home/ProblemBackgroundImages.tsx`**
   - Updated all 19 image imports to use optimized WebP versions
   - Images now load from `src/assets/problem/optimized/`

2. **`src/types/global.d.ts`**
   - Added WebP module declaration for TypeScript support

3. **`package.json`**
   - Added `optimize:problem-images` script
   - Added `tsx` and `sharp` as dev dependencies

## Performance Impact

- **Scroll performance:** Significantly improved due to 90% reduction in image payload
- **Load time:** Faster initial page load and smoother parallax scrolling
- **Visual quality:** No noticeable degradation - images maintain visual quality at smaller sizes

## Notes

- Original images are preserved in `src/assets/problem/` for reference
- Optimized images are stored in `src/assets/problem/optimized/`
- All images use `loading="lazy"` for additional performance benefits
- Images maintain their original aspect ratios and visual appearance

