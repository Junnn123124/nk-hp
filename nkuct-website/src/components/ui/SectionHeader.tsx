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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
        {title}
      </h2>
      <div
        className={centered ? 'mx-auto mb-5' : 'mb-5'}
        style={{
          width: '64px',
          height: '4px',
          borderRadius: '9999px',
          background: 'linear-gradient(90deg, var(--nk-primary), var(--nk-accent-light))',
        }}
      />
      {subtitle && (
        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--nk-text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
