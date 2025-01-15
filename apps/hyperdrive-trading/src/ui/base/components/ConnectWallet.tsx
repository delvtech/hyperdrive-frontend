import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWalletButton({ wide }: { wide?: boolean }): JSX.Element {
  if (wide) {
    return (
      <div className="flex w-full flex-col gap-2 [&>div>button]:w-full [&>div>button]:!text-center [&>div]:w-full">
        <ConnectButton showBalance={false} />
      </div>
    );
  }

  return <ConnectButton showBalance={false} />;
}
