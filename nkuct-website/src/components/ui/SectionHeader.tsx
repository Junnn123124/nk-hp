import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`} style={{ marginBottom: '2.75rem' }}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{
          lineHeight: 1.35,
          wordBreak: 'keep-all',
          color: light ? '#FFFFFF' : 'var(--nk-text)',
          textShadow: light ? '0 2px 16px rgba(2, 6, 23, 0.45)' : undefined,
        }}
      >
        {title}
      </h2>
      <div
        className={centered ? 'mx-auto' : ''}
        style={{
          width: '64px',
          height: '4px',
          borderRadius: '9999px',
          marginTop: '0.9rem',
          marginBottom: '1rem',
          background: light
            ? 'linear-gradient(90deg, #93C5FD, #E0F2FE)'
            : 'linear-gradient(90deg, var(--nk-primary), var(--nk-accent-light))',
          boxShadow: light ? '0 2px 10px rgba(96, 165, 250, 0.45)' : undefined,
        }}
      />
      {subtitle && (
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{
            color: light ? '#F1F5F9' : 'var(--nk-text-muted)',
            lineHeight: 1.7,
            wordBreak: 'keep-all',
            textShadow: light ? '0 1px 12px rgba(2, 6, 23, 0.4)' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
