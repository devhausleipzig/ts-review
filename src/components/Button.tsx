import clsx from "clsx";
import { HTMLButtonProps, HTMLLinkProps } from "../types/htmlTypes";

type ButtonVariants = "filled" | "outlined" | "ghost";

interface CustomProps {
  variant?: ButtonVariants;
}

interface ButtonProps extends HTMLButtonProps, CustomProps {}
interface LinkProps extends HTMLLinkProps, CustomProps {
  url: string;
}

function makeStyles(variant: ButtonVariants, className: string) {
  return clsx(
    "rounded p-2",
    className,
    variant === "filled"
      ? "bg-slate-700 text-slate-50"
      : variant === "ghost"
      ? "border-none"
      : "border border-slate-700 bg-transparent text-slate-700"
  );
}

export function CustomLink({
  variant = "ghost",
  children,
  className = "",
  url,
  ...props
}: LinkProps) {
  return (
    <a {...props} href={url} className={makeStyles(variant, className)}>
      {children}
    </a>
  );
}

export function CustomButton({
  children,
  className = "",
  variant = "filled",
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={makeStyles(variant, className)}
    >
      {children}
    </button>
  );
}

export const Button = Object.assign(CustomButton, { Link: CustomLink });
