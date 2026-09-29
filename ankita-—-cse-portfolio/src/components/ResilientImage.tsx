import React, { useState } from 'react';
import { Code2, Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  darkVariant?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Technical Architecture',
  fallbackSubtitle = 'Computer Science & Engineering',
  darkVariant = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-8 text-center select-none ${
          darkVariant
            ? 'bg-gradient-to-br from-[#090D16] via-[#0F172A] to-[#1E293B] text-slate-100'
            : 'bg-gradient-to-br from-[#EFECE6] via-[#E5E2DC] to-[#D8D4CC] text-[#141413]'
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
            darkVariant
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              : 'bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20'
          }`}
        >
          {darkVariant ? <Layers className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
        </div>
        <p className="font-display text-base font-medium tracking-tight">{fallbackTitle}</p>
        <p
          className={`text-xs mt-1 ${
            darkVariant ? 'text-slate-400' : 'text-[#575653]'
          }`}
        >
          {fallbackSubtitle}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
