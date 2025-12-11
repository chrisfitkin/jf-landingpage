interface LogoProps {
  className?: string;
  size?: number;
}

export function JaguarEye({ className = '', size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c779" />
          <stop offset="50%" stopColor="#d4a746" />
          <stop offset="100%" stopColor="#b8942f" />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="40" height="40" rx="10" fill="url(#darkGradient)" />

      {/* Outer eye shape - almond/angular */}
      <path
        d="M8 20C8 20 14 10 20 10C26 10 32 20 32 20C32 20 26 30 20 30C14 30 8 20 8 20Z"
        fill="url(#goldGradient)"
        opacity="0.15"
      />

      {/* Eye outline */}
      <path
        d="M8 20C8 20 14 11 20 11C26 11 32 20 32 20C32 20 26 29 20 29C14 29 8 20 8 20Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Iris */}
      <circle cx="20" cy="20" r="6" fill="url(#goldGradient)" opacity="0.3" />
      <circle cx="20" cy="20" r="6" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />

      {/* Pupil - vertical slit */}
      <ellipse cx="20" cy="20" rx="1.5" ry="4.5" fill="url(#goldGradient)" />

      {/* Highlight */}
      <circle cx="22" cy="17" r="1.5" fill="#e8c779" opacity="0.6" />
    </svg>
  );
}
