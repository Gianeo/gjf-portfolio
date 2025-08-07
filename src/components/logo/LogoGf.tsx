'use client';

import * as React from 'react';

export const LogoGf = ({
  className = '',
  width = 590,
  height = 728,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 590 728"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M69.6279 394.339C54.1502 404.974 44 422.801 44 443C44 475.585 70.4152 502 103 502H356V502.037C419.783 503.629 471 555.833 471 620C471 667.933 442.419 709.19 401.37 727.661C416.849 717.027 427 699.199 427 679C427 647.421 402.191 621.637 371 620.075V620H118C52.8304 620 0 567.17 0 502C0 454.067 28.5797 412.81 69.6279 394.339Z" 
        fill="black"
      />
      <circle 
        cx="531" 
        cy="59" 
        r="59" 
        fill="black"
      />
      <path 
        d="M236 0C366.339 0 472 105.661 472 236C472 366.339 366.339 472 236 472C105.661 472 0 366.339 0 236C0 105.661 105.661 0 236 0ZM236 118C170.83 118 118 170.83 118 236C118 301.17 170.83 354 236 354C301.17 354 354 301.17 354 236C354 170.83 301.17 118 236 118Z" 
        fill="black"
      />
    </svg>
  );
};