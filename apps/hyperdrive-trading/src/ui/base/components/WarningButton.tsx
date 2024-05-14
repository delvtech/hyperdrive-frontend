export function WarningButton({
  label,
  icon,
  tooltip,
}: {
  label: string;
  icon: React.ReactNode;
  tooltip?: string;
}): JSX.Element {
  return (
    <div
      className="daisy-tooltip daisy-tooltip-left before:z-10"
      data-tip={tooltip}
    >
      <button
        disabled
        className="disabled daisy-btn daisy-btn-circle daisy-btn-warning flex w-auto min-w-40 px-4 disabled:bg-warning disabled:text-base-100 disabled:opacity-30"
      >
        {icon}
        {label}
      </button>
    </div>
  );
}
