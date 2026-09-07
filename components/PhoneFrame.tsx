import type { Screen } from "@/content/site";

/**
 * Device frame around a real app screenshot.
 *
 * The captures already include the status bar and dynamic island, so the frame
 * only contributes the bezel — no fake notch is drawn on top. Images are
 * pre-sized WebP (760px wide) and rendered with intrinsic dimensions so they
 * never cause layout shift.
 */
export function PhoneFrame({
  screen,
  className = "",
  tone = "light",
  priority = false,
}: {
  screen: Screen;
  className?: string;
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  const bezel =
    tone === "dark"
      ? "bg-[#060b12] ring-1 ring-white/12"
      : "bg-[#171310] ring-1 ring-black/10";
  const glow =
    tone === "dark"
      ? "shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]"
      : "shadow-[0_34px_80px_-26px_rgba(26,20,16,0.42)]";

  return (
    <div className={`relative ${className}`}>
      <div className={`relative rounded-[2.4rem] ${bezel} ${glow} p-[0.42rem]`}>
        <div className="overflow-hidden rounded-[2.05rem] bg-paper">
          <img
            src={screen.src}
            alt={screen.alt}
            width={screen.w}
            height={screen.h}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding={priority ? "sync" : "async"}
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
