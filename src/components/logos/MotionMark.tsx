interface LogoProps {
  className?: string;
  size?: number;
}

export function MotionMark({ className = '', size = 40 }: LogoProps) {
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
        <linearGradient id="motionGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c779" />
          <stop offset="50%" stopColor="#d4a746" />
          <stop offset="100%" stopColor="#b8942f" />
        </linearGradient>
        <linearGradient id="motionDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="40" height="40" rx="10" fill="url(#motionDark)" />

      {/* Motion lines - trailing */}
      <path
        d="M6 14L14 14"
        stroke="url(#motionGold)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M4 20L12 20"
        stroke="url(#motionGold)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M6 26L14 26"
        stroke="url(#motionGold)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Stylized J with forward lean */}
      <path
        d="M18 10L22 10L22 26C22 28.5 20.5 30 18 30L14 30"
        stroke="url(#motionGold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Speed accent - angular arrow */}
      <path
        d="M28 16L34 20L28 24"
        stroke="url(#motionGold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
