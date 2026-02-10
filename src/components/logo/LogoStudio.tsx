'use client';

import * as React from 'react';

export const LogoGf = ({
  className = '',
  'aria-label': ariaLabel = 'Gianeo Studio logo',
}: {
  className?: string;
  'aria-label'?: string;
}) => {
  return (
    <svg
      className={className}
      viewBox="-80 -80 750 840"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
    >
      <defs>
        <filter id="logo-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#FFFFFF" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#logo-shadow)">
        <circle cx="531" cy="59" r="59" fill="white" />
        <path d="M236 0C366.339 0 472 105.661 472 236C472 366.339 366.339 472 236 472C105.661 472 0 366.339 0 236C0 105.661 105.661 0 236 0ZM236 118C170.83 118 118 170.83 118 236C118 301.17 170.83 354 236 354C301.17 354 354 301.17 354 236C354 170.83 301.17 118 236 118Z" fill="white" />
        <circle cx="383.5" cy="591.5" r="88.5" fill="white" />
      </g>
    </svg>
  );
};
