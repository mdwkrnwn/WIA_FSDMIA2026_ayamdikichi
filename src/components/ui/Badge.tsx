import React from 'react';

export type BadgeVariant = 'ok' | 'warn' | 'info' | 'bad' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', style }) => {
  const variantClass = variant !== 'default' ? `b-${variant}` : '';
  return (
    <span className={`badge ${variantClass}`.trim()} style={style}>
      {children}
    </span>
  );
};