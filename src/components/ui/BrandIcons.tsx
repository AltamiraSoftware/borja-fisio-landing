import type { SVGProps } from "react";

/**
 * Doctoralia brand mark.
 * Ported from the `danielalopezpsicologa` BrandIcons reference, adapted to the
 * SVGProps API used by `WhatsAppIcon` in this project.
 */
export function DoctoraliaLogo({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`${className} pointer-events-none block shrink-0`}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#00B39B" />
      <path
        d="M10.2 8.4h5.9c4.1 0 7 2.8 7 7.5 0 4.8-2.9 7.7-7 7.7h-5.9V8.4Zm5.7 11.9c2.2 0 3.6-1.55 3.6-4.35 0-2.75-1.4-4.25-3.6-4.25h-2.15v8.6h2.15Z"
        fill="white"
      />
    </svg>
  );
}
