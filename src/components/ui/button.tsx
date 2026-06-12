import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "border border-accent bg-white text-accent hover:bg-surface",
  ghost: "text-accent hover:bg-surface",
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`}
      type={type}
      {...props}
    />
  );
}
