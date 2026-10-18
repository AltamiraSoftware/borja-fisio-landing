import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ghost: "btn--ghost",
  dark: "btn--primary",
  whatsapp: "btn--whatsapp",
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
  const isWhatsapp = variant === "whatsapp" || ("href" in props && typeof props.href === "string" && /^(https?:\/\/)?(wa\.me|api\.whatsapp\.com)\//.test(props.href));
  const resolvedVariant = isWhatsapp ? "whatsapp" : variant;
  const resolvedIcon = isWhatsapp ? <WhatsAppIcon className="size-5" /> : icon;

  const content = (
    <>
      {resolvedIcon && iconPosition === "left" ? (
        <span className="grid size-5 shrink-0 place-items-center">{resolvedIcon}</span>
      ) : null}
      <span>{children}</span>
      {resolvedIcon && iconPosition === "right" ? (
        <span className="grid size-5 shrink-0 place-items-center">{resolvedIcon}</span>
      ) : null}
    </>
  );

  const classes = cn(
    "btn",
    sizeStyles[size],
    variantStyles[resolvedVariant],
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
