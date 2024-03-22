import classNames from "classnames";

export function LoadingButton({
  label,
  type,
}: {
  label: string;
  type: "primary" | "warning";
}): JSX.Element {
  return (
    <button
      disabled
      className={classNames(
        "daisy-btn daisy-btn-circle",
        type === "primary" ? "daisy-btn-primary" : "daisy-btn-warning",
        "w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30",
      )}
    >
      <div className="daisy-loading daisy-loading-spinner" />
      {label}
    </button>
  );
}
