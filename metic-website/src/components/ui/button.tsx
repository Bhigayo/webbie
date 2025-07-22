"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  const baseStyle = "rounded-md text-sm font-medium transition-colors";
  
  const variants = {
    default: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-neutral-400 text-black hover:bg-neutral-100",
    ghost: "bg-transparent text-black hover:bg-neutral-100",
  };

  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};
