import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const TimerIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.5 2.5M9 2h6" />
  </svg>
);

export const ScanIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M7 12h10" />
  </svg>
);

export const BrainIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9.5 3A2.5 2.5 0 0 0 7 5.5 3 3 0 0 0 5 11a3 3 0 0 0 1 5.7V19a2 2 0 0 0 2 2h1.5V3.5A.5.5 0 0 0 9.5 3Z" />
    <path d="M14.5 3A2.5 2.5 0 0 1 17 5.5 3 3 0 0 1 19 11a3 3 0 0 1-1 5.7V19a2 2 0 0 1-2 2h-1.5" />
  </svg>
);

export const TrendIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17l6-6 4 4 7-8" />
    <path d="M17 7h4v4" />
  </svg>
);

export const FlameIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c1 3-1 4-2 6-1 2 0 4 2 4s3-1 3-3c2 1 3 3 3 5a6 6 0 1 1-12 0c0-3 2-5 3-7 1-2 3-2 3-5Z" />
  </svg>
);

export const LockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const TargetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3.5 2" />
  </svg>
);

export const EyeOffIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" />
    <path d="M4 4l16 16" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M9.5 5C6.5 6.4 4.5 9.3 4.5 12.8V19h6.2v-6.2H7.4c0-2.4 1-4.2 3-5.3L9.5 5Zm9 0c-3 1.4-5 4.3-5 7.8V19h6.2v-6.2h-3.3c0-2.4 1-4.2 3-5.3L18.5 5Z" />
  </svg>
);

/** Icon lookup used by the data-driven feature grid in `content/site.ts`. */
export const iconMap = {
  timer: TimerIcon,
  scan: ScanIcon,
  brain: BrainIcon,
  trend: TrendIcon,
  flame: FlameIcon,
  lock: LockIcon,
  book: BookIcon,
  bolt: BoltIcon,
  target: TargetIcon,
  check: CheckIcon,
  clock: ClockIcon,
} as const;

export type IconName = keyof typeof iconMap;

export const AppleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M16.365 1.43c0 1.14-.417 2.2-1.11 2.98-.85.95-2.24 1.67-3.36 1.58-.14-1.1.42-2.28 1.08-3.02.75-.85 2.06-1.5 3.24-1.54.03.33.15.66.15 0Zm3.94 15.5c-.58 1.33-.86 1.92-1.6 3.1-1.04 1.63-2.5 3.66-4.3 3.68-1.6.02-2.02-1.05-4.2-1.04-2.17.01-2.63 1.06-4.24 1.04-1.8-.02-3.18-1.85-4.22-3.48C-.53 17.4-1.14 12.06 1.1 8.9c1.19-1.68 3.06-2.74 4.83-2.74 1.8 0 2.94 1.05 4.43 1.05 1.45 0 2.33-1.05 4.42-1.05 1.57 0 3.24.86 4.42 2.34-3.88 2.13-3.25 7.67 1.11 9.43Z" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M3.6 2.3 13.4 12 3.6 21.7c-.36-.2-.6-.6-.6-1.1V3.4c0-.5.24-.9.6-1.1Zm11.2 8.3 2.9-2.9 3.1 1.75c.8.46.8 1.64 0 2.1l-3.1 1.75-2.9-2.7Zm-1.1 1.4L5.1 20.5l9.3-5.4-1.5-1.1Zm0-3.4 1.5-1.1L5.1 3.5l7.6 6.1Z" />
  </svg>
);
