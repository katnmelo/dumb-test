'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className,
  fill,
  priority,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  // Use placeholder.jpg as the fallback when image fails to load
  const handleError = () => {
    setImgSrc('/images/placeholders/placeholder.jpg');
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fill={fill}
      priority={priority}
      sizes={sizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL || '/images/placeholders/placeholder.jpg'}
      onError={handleError}
      {...props}
    />
  );
}
