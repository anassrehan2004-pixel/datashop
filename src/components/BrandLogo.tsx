import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light' }) => {
  const isLightText = variant === 'light';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          isLightText ? 'text-white' : 'text-[#212529]'
        }`}
      >
        DataShop
      </span>
    </span>
  );
};
