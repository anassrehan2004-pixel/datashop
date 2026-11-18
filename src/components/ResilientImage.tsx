import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle = 'The DataShop — UK Business Intelligence',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1E36] via-[#172B4D] to-[#1E3A5F] p-8 text-center text-white ${className}`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="mb-3 opacity-80"
        >
          <rect x="4" y="16" width="5" height="10" rx="1" fill="#93C5FD" />
          <rect x="13" y="10" width="5" height="16" rx="1" fill="#FFFFFF" />
          <rect x="22" y="5" width="5" height="21" rx="1" fill="#38BDF8" />
        </svg>
        <span className="font-display text-sm font-semibold tracking-tight text-slate-100">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
