import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CustomToastMessage({
  message,
  link,
}: {
  message: string;
  link: string;
}): JSX.Element {
  return (
    <span className="flex flex-col">
      <span className="gradient-text">{message}</span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        View on Etherscan <ArrowRightIcon className="ml-1 h-4" />
      </a>
    </span>
  );
}
