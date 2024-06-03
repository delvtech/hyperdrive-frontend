import { Long, Short } from "@delvtech/hyperdrive-viem";

export function PositionActionsMenu({
  position,
}: {
  position: Long | Short;
}): JSX.Element {
  return (
    <>
      <span className="daisy-menu-title text-neutral-content">
        Position actions
      </span>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
          // href={google(calendarDetails)}
        >
          <img className="h-6" src="/calendar-icons/google-calendar.svg" />{" "}
          Google
        </a>
      </li>
    </>
  );
}
