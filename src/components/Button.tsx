import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap";

const variants: Record<string, string> = {
  primary: "bg-maroon text-cream-50 hover:bg-maroon-700",
  outline: "border border-ink/20 text-ink hover:border-ink/40 bg-transparent",
  ghost: "bg-cream-50 text-ink hover:bg-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
