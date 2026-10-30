import React from 'react';

type IconName = 'menu' | 'road' | 'pin' | 'cal' | 'check' | 'drop' | 'trash' | 'bulb' | 'bench' | 'leaf' | 'shield' | 'cam' | 'search' | 'download';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'ic', ...props }) => {
  switch (name) {
    case 'menu':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'road':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3" />
        </svg>
      );
    case 'pin':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      );
    case 'cal':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="m5 12 5 5 9-10" />
        </svg>
      );
    case 'drop':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
        </svg>
      );
    case 'trash':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" />
        </svg>
      );
    case 'bulb':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.100h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
        </svg>
      );
    case 'bench':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M3 12h18M5 12V8h14v4M6 12v7M18 12v7M3 16h18" />
        </svg>
      );
    case 'leaf':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M5 19C5 10 10 5 20 4c0 10-5 15-13 15M5 19c2-5 5-8 9-10" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4" />
        </svg>
      );
    case 'cam':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      );
    case 'search':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4" />
        </svg>
      );
    case 'download':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
          <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
        </svg>
      );
    default:
      return null;
  }
};