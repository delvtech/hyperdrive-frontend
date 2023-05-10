import { PropsWithChildren, ReactElement } from "react";

interface CardProps {}

export function Card({ children }: PropsWithChildren<CardProps>): ReactElement {
  return (
    <div className="rounded-lg bg-dawn py-10 px-12 text-white">{children}</div>
  );
}
