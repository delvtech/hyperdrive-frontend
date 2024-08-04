import type { ReactElement } from "react";

export function IneligibleAccountMessage(): ReactElement {
  return (
    <div className="flex w-screen grow flex-col items-center justify-center gap-4">
      <h2>Ineligible Wallet Address</h2>
      <p>This wallet address is not eligible to use this website.</p>
    </div>
  );
}
