import { PropsWithChildren, ReactElement } from "react";

interface CardProps {}

export function Card({ children }: PropsWithChildren<CardProps>): ReactElement {
  return (
    <div className="rounded-lg bg-dawn py-10 px-12 text-white shadow-[0_4px_14px_rgb(4,9,26)]">
      {children}
    </div>
  );
}
