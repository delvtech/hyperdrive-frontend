import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { BridgeAssetsForm } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsForm";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useBridgeToken } from "src/ui/bridge/hooks/useBridgeToken";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { useAccount, useChainId } from "wagmi";

interface BridgeAssetsModalProps {
  modalId: string;
  tokenSymbol: string;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}
export function BridgeAssetsModal({
  modalId,
  tokenSymbol,
  closeModal,
  setShowBridgeUI,
}: BridgeAssetsModalProps): ReactElement {
  return (
    <Modal
      modalId={modalId}
      modalHeader={<BridgeAssetsModalHeader tokenSymbol={tokenSymbol} />}
      modalContent={
        <BridgeAssetsModalForm
          tokenSymbol={tokenSymbol}
          setShowBridgeUI={setShowBridgeUI}
          closeModal={closeModal}
        />
      }
    >
      {({ showModal }) => (
        <button
          className="daisy-btn daisy-btn-primary rounded-full"
          onClick={() => showModal()}
        >
          + Bridge Assets
        </button>
      )}
    </Modal>
  );
}

interface BridgeAssetsHeaderProps {
  tokenSymbol: string | undefined;
}

export function BridgeAssetsModalHeader({
  tokenSymbol,
}: BridgeAssetsHeaderProps): ReactElement {
  const { address: account } = useAccount();
  const chainId = useChainId();
  const { chains } = useBridgeChainsByChainId();
  const { balances } = useBridgeTokenBalances(account, [tokenSymbol || ""]);
  const tokenBalance = balances?.[0]?.find(
    (chainBalance) => chainBalance.chainId === chainId,
  );

  const chainName = chains?.[String(chainId)]?.name;

  return (
    <ModalHeader
      heading={`Bridge ${tokenSymbol || "Assets"}`}
      subHeading="Bring your assets from other chains to use on Hyperdrive"
    >
      <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
        <div>{`Your ${chainName} Balance:`}</div>
        <div>{`${tokenBalance?.balance || "0"} ${tokenSymbol}`}</div>
      </div>
    </ModalHeader>
  );
}

interface BridgeAssetsModalFormProps {
  tokenSymbol: string | undefined;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}

export function BridgeAssetsModalForm({
  tokenSymbol,
  closeModal,
  setShowBridgeUI,
}: BridgeAssetsModalFormProps): ReactElement {
  const { token } = useBridgeToken(tokenSymbol);

  if (!token) {
    return <div>Loading token information...</div>;
  }

  return (
    <div>
      <button
        className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
        onClick={closeModal}
      >
        <XMarkIcon className="w-6 " title="Close position" />
      </button>
      <BridgeAssetsForm
        token={token}
        onCloseBridgeUI={(e) => {
          // preventDefault since we don't want to close the modal while the
          // tx is temporarily pending the user's signature in their wallet.
          e.preventDefault();
          setShowBridgeUI(false);
        }}
      />
    </div>
  );
}
