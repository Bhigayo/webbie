"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={clsx(
        "w-full px-4 py-2 border border-neutral-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-black",
        className
      )}
      {...props}
    />
  );
};
