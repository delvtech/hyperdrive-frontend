import { ReactElement, useState } from "react";

// All the RPC endpoints that have been configured and are therefore used in
// this deployment of the UI
const configuredRpcEndpoints = [
  ["Hardhat", "VITE_LOCALHOST_NODE_RPC_URL"],
  ["CloudChain", "VITE_CUSTOM_CHAIN_NODE_RPC_URL"],
  ["Mainnet", "VITE_MAINNET_RPC_URL"],
  ["Linea", "VITE_LINEA_RPC_URL"],
  ["Base", "VITE_BASE_RPC_URL"],
  ["Gnosischain", "VITE_GNOSIS_NODE_RPC_URL"],
  ["GnosisFork", "VITE_GNOSIS_FORK_NODE_RPC_URL"],
]
  .filter(([unusedName, key]) => typeof import.meta.env[key] !== "undefined")
  .map(([name, key]) => {
    return [name, key, localStorage.getItem(key) || import.meta.env[key]];
  });

export function RpcForm(): ReactElement {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="daisy-btn m-1 rounded-full"
        // @ts-expect-error rpcModal is a Dialog element, and React doesn't
        // provide the correct types for now
        onClick={() => document.getElementById("rpcModal")?.showModal()}
      >
        Configure RPC
      </button>
      <dialog id="rpcModal" className="daisy-modal">
        <div className="daisy-modal-box w-[600px] max-w-[600px]">
          <div className="daisy-card-body">
            <h3 className="daisy-card-title">RPC URLs</h3>
            <p>Refresh after saving to see changes</p>
            {configuredRpcEndpoints.map(([name, key, rpcUrl]) => {
              return (
                <RpcInput
                  key={key}
                  rpcName={name}
                  rpcKey={key}
                  rpcUrl={rpcUrl}
                />
              );
            })}
          </div>
          <div className="daisy-modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="daisy-btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

function RpcInput({
  rpcName,
  rpcUrl,
  rpcKey,
}: {
  rpcName: string;
  rpcUrl: string;
  rpcKey: string;
}) {
  const [rpcUrlDraft, setRpcUrlDraft] = useState(rpcUrl);
  return (
    <div className="daisy-join">
      <div className="daisy-btn daisy-join-item daisy-btn-neutral">
        {rpcName}
      </div>
      <input
        type="text"
        value={rpcUrlDraft}
        onChange={(e) => setRpcUrlDraft(e.target.value)}
        className="daisy-input daisy-join-item w-full"
      />
      <button
        onClick={() => {
          localStorage.setItem(rpcKey, rpcUrlDraft);
        }}
        className="daisy-btn daisy-btn-primary daisy-join-item"
      >
        Save
      </button>
    </div>
  );
}
