import classNames from "classnames";

export function LoadingButton({
  label,
  variant,
}: {
  label: string;
  variant: "primary" | "warning";
}): JSX.Element {
  return (
    <button
      disabled
      className={classNames(
        "daisy-btn daisy-btn-circle",
        variant === "primary" ? "daisy-btn-primary" : "daisy-btn-warning",
        "w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30",
      )}
    >
      <div className="daisy-loading daisy-loading-spinner" />
      {label}
    </button>
  );
}
