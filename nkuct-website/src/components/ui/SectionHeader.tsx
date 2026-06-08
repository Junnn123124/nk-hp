import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className}`}>
      {badge && (
        <span className="badge-section mb-4 inline-block">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--nk-text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
