# Image Placeholder System

This project uses a centralized placeholder image system to ensure consistent fallbacks when images fail to load or are missing.

## How It Works

The placeholder image is located at: `/public/images/placeholders/placeholder.jpg`

## Usage Options

### Option 1: Custom Image Component (Recommended)

Use the `CustomImage` component instead of Next.js's built-in `Image`:

```tsx
import CustomImage from '../components/Image';

<CustomImage
  src="/path/to/your/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

**Benefits:**
- Automatically falls back to placeholder if image fails to load
- Uses placeholder as blur placeholder while loading
- Same API as Next.js Image component

### Option 2: Utility Functions

Use the utility functions for more control:

```tsx
import { getImageSrc, createImageProps } from '../utils/images';

// Simple fallback
const imageSrc = getImageSrc('/path/to/image.jpg');

// Create full props object
const imageProps = createImageProps('/path/to/image.jpg', 'Alt text', {
  width: 400,
  height: 300,
  className: 'rounded-lg'
});
```

### Option 3: Direct CSS Background

For background images in CSS:

```css
.hero-section {
  background-image: url('/images/placeholders/placeholder.jpg');
}
```

## Best Practices

1. **Always use the CustomImage component** for regular images
2. **Set appropriate alt text** for accessibility
3. **Use the utility functions** when you need more control
4. **Test with missing images** to ensure fallbacks work

## File Structure

```
public/
  images/
    placeholders/
      placeholder.jpg  ← Your main placeholder image
src/
  app/
    components/
      Image.tsx        ← Custom Image component
    utils/
      images.ts        ← Utility functions
```

## Example Implementation

See `/src/app/stores/bad-bird-mega/page.tsx` for a complete example of how to use the placeholder system in a real page.
