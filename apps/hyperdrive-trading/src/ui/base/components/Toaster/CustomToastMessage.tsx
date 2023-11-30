import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CustomToastMessage({
  message,
  link,
}: {
  message: string;
  link: string;
}): JSX.Element {
  return (
    <span className="mx-6 flex flex-col">
      {message}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 flex cursor-pointer flex-row text-sm"
      >
        View on Etherscan <ArrowRightIcon className="ml-1 h-4" />
      </a>
    </span>
  );
}
