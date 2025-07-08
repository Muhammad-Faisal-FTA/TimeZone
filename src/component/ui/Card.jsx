import { ReactNode } from "react";
import classNames from "classnames";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div className={classNames("bg-white rounded-2xl p-4", className)}>
      {children}
    </div>
  );
}

type CardContentProps = {
  className?: string;
  children: ReactNode;
};

export function CardContent({ className, children }: CardContentProps) {
  return <div className={classNames("text-base", className)}>{children}</div>;
}
