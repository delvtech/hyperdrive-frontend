import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

export function Bridge(): ReactElement {
  const appConfig = useAppConfig();
  return (
    <div>
      <h1>Bridge</h1>
    </div>
  );
}

export default Bridge;
