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
    <>
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
    </>
  );
}
