import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { google, ics, outlook } from "calendar-link";

export function CalendarLinkMenu({
  date,
  title,
  description,
}: {
  date: Date;
  title: string;
  description: string;
}): JSX.Element {
  const calendarDetails = {
    title,
    description,
    start: date,
    end: date,
  };
  return (
    <div className="daisy-dropdown daisy-dropdown-end daisy-dropdown-top">
      <div
        tabIndex={0}
        role="button"
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="daisy-btn daisy-btn-ghost daisy-btn-sm rotate-90 hover:bg-transparent"
      >
        <EllipsisVerticalIcon className="h-5" />
      </div>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content z-10 w-52 rounded-lg bg-base-100 p-4 shadow"
      >
        <span className="daisy-menu-title text-neutral-content">
          Add to calendar
        </span>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
            href={google(calendarDetails)}
          >
            <img className="h-6" src="/calendar-icons/google-calendar.svg" />{" "}
            Google
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
            href={outlook(calendarDetails)}
          >
            <img className="h-6" src="/calendar-icons/outlook-calendar.svg" />{" "}
            Outlook
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
            href={ics(calendarDetails)}
          >
            <img className="h-5" src="/calendar-icons/ics-calendar.svg" />{" "}
            iCalendar
          </a>
        </li>
      </ul>
    </div>
  );
}