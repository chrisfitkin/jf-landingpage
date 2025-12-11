interface LogoProps {
  className?: string;
  size?: number;
}

export function ClawMark({ className = '', size = 40 }: LogoProps) {
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
        <linearGradient id="clawGold1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c779" />
          <stop offset="100%" stopColor="#d4a746" />
        </linearGradient>
        <linearGradient id="clawGold2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a746" />
          <stop offset="100%" stopColor="#b8942f" />
        </linearGradient>
        <linearGradient id="clawGold3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8942f" />
          <stop offset="100%" stopColor="#8a7023" />
        </linearGradient>
        <linearGradient id="clawDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="40" height="40" rx="10" fill="url(#clawDark)" />

      {/* Three diagonal claw slashes */}
      {/* First slash (leftmost, brightest) */}
      <path
        d="M10 8L18 32"
        stroke="url(#clawGold1)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Second slash (middle) */}
      <path
        d="M18 8L26 32"
        stroke="url(#clawGold2)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Third slash (rightmost, darkest) */}
      <path
        d="M26 8L34 32"
        stroke="url(#clawGold3)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Subtle scratch texture on middle */}
      <path
        d="M19 12L25 28"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
