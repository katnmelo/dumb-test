// Utility functions for handling images with placeholder fallback

export const PLACEHOLDER_IMAGE = '/images/placeholders/placeholder.jpg';

/**
 * Get image source with placeholder fallback
 * @param src - The original image source
 * @returns The image source or placeholder if original is not available
 */
export function getImageSrc(src?: string): string {
  return src || PLACEHOLDER_IMAGE;
}

/**
 * Create image props with placeholder fallback
 * @param src - The original image source
 * @param alt - Alt text for the image
 * @param additionalProps - Additional props to merge
 * @returns Image props object with placeholder fallback
 */
export function createImageProps(
  src?: string,
  alt: string = 'Image',
  additionalProps: Record<string, unknown> = {}
) {
  return {
    src: getImageSrc(src),
    alt,
    blurDataURL: PLACEHOLDER_IMAGE,
    ...additionalProps,
  };
}
