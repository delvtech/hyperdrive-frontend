import { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { APP_VERSION } from "src/version.output";

export function useClearLocalStorageOnNewVersion(): void {
  const [lastVersion, setVersion] = useLocalStorage<string>("app-version");
  useEffect(() => {
    if (lastVersion !== APP_VERSION) {
      const styles = [
        "background: #ffff00",
        "color: black",
        "display: block",
        "line-height: 40px",
        "text-align: center",
        "font-weight: bold",
        "font-size: 18px",
      ].join(";");

      // biome-ignore lint/nursery/noConsole:
      console.log("%cNew app version detected, clearing local storage", styles);
      // Blow away everything in local storage when the app version changes,
      // since we don't know what changed in the new version.
      localStorage.clear();
      setVersion(APP_VERSION);
    }
  }, [lastVersion, setVersion]);
}
