import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[#2EC4C6] text-[#052E3A] shadow-[0_18px_40px_rgba(46,196,198,0.26)] hover:bg-[#86eff0]",
  secondary:
    "border-white/25 bg-white/10 text-white backdrop-blur-xl hover:border-[#2EC4C6]/55 hover:bg-white/15",
  ghost:
    "border-[#d3e4df] bg-white/65 text-[#073B4C] hover:border-[#2EC4C6]/55 hover:bg-white",
  dark: "border-transparent bg-[#073B4C] text-white shadow-[0_18px_42px_rgba(5,46,58,0.22)] hover:bg-[#0F5366]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkDomProps = Omit<LinkButtonProps, keyof BaseButtonProps>;
type NativeDomProps = Omit<NativeButtonProps, keyof BaseButtonProps>;

function isLinkProps(
  props: LinkDomProps | NativeDomProps,
): props is LinkDomProps {
  return typeof (props as LinkDomProps).href === "string";
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: LinkButtonProps | NativeButtonProps) {

  const content = (
    <>
      {icon && iconPosition === "left" ? (
        <span className="grid size-4 place-items-center">{icon}</span>
      ) : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="grid size-4 place-items-center">{icon}</span>
      ) : null}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold leading-none transition duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2EC4C6]",
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if (isLinkProps(props)) {
    const { target, rel, ...anchorProps } = props;

    return (
      <a
        className={classes}
        target={target}
        rel={target === "_blank" ? (rel ?? "noreferrer") : rel}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
