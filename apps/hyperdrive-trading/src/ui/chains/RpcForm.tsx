import { ReactElement } from "react";

export function RpcForm(): ReactElement {
  return (
    <div className="daisy-dropdown">
      <div tabIndex={0} role="button" className="daisy-btn m-1">
        Click
      </div>
      <div
        tabIndex={0}
        className="daisy-card daisy-dropdown-content daisy-card-compact z-[1] w-64 bg-primary p-2 text-primary-content shadow"
      >
        <div className="daisy-card-body">
          <h3 className="daisy-card-title">Card title!</h3>
          <p>you can use any element as a dropdown.</p>
        </div>
      </div>
    </div>
  );
}
