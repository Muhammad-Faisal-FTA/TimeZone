import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  className?: string;
  variant?: "outline" | "solid";
  onClick?: () => void;
  children: ReactNode;
};

export function Button({ className, variant = "solid", onClick, children }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 text-gray-800 bg-white hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button onClick={onClick} className={classNames(baseClasses, variantClasses, className)}>
      {children}
    </button>
  );
}
