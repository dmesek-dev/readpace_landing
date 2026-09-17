import { AppleIcon, PlayIcon } from "./Icons";
import { StoreLink } from "./StoreLink";
import { stores } from "@/content/site";

type Variant = "default" | "onBrand";
type Store = "app_store" | "google_play";

/**
 * The primary CTA. Both buttons read their href from `stores` in
 * `content/site.ts` — when a URL is still `null` the badge renders as a
 * non-clickable "coming soon" chip rather than a dead `#` link.
 *
 * A real (non-null) badge sends a `store_click` analytics event when pressed;
 * a "coming soon" chip has nothing to click and sends nothing.
 */
export function StoreBadges({
  className = "",
  variant = "default",
  size = "lg",
}: {
  className?: string;
  variant?: Variant;
  size?: "lg" | "sm";
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Badge
        href={stores.appStore}
        store="app_store"
        icon={<AppleIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />}
        kicker="Download on the"
        label="App Store"
        variant={variant}
        size={size}
        primary
      />
      <Badge
        href={stores.googlePlay}
        store="google_play"
        icon={<PlayIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />}
        kicker="Get it on"
        label="Google Play"
        variant={variant}
        size={size}
      />
    </div>
  );
}

function Badge({
  href,
  store,
  icon,
  kicker,
  label,
  variant,
  size,
  primary = false,
}: {
  href: string | null;
  store: Store;
  icon: React.ReactNode;
  kicker: string;
  label: string;
  variant: Variant;
  size: "lg" | "sm";
  primary?: boolean;
}) {
  const pad = size === "lg" ? "px-5 py-3" : "px-4 py-2.5";
  const labelSize = size === "lg" ? "text-lg" : "text-base";

  const skin =
    variant === "onBrand"
      ? primary
        ? "bg-white text-ink"
        : "bg-ink text-white"
      : primary
        ? "bg-ink text-white"
        : "border border-hairline-strong bg-card text-ink";

  const iconTint =
    variant === "onBrand"
      ? primary
        ? "text-brand"
        : "text-brand-bright"
      : primary
        ? "text-white"
        : "text-brand";

  const inner = (
    <>
      <span className={iconTint}>{icon}</span>
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium opacity-70">{kicker}</span>
        <span className={`block font-display ${labelSize} font-semibold`}>{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`flex items-center gap-3 rounded-full ${pad} ${skin} opacity-70`}
        aria-label={`${label} — coming soon`}
      >
        {inner}
        <span className="ml-1 rounded-full border border-current px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide opacity-80">
          Soon
        </span>
      </span>
    );
  }

  return (
    <StoreLink
      href={href}
      store={store}
      ariaLabel={`${kicker} ${label}`}
      className={`flex items-center gap-3 rounded-full ${pad} ${skin} transition-transform duration-200 hover:-translate-y-0.5`}
    >
      {inner}
    </StoreLink>
  );
}
