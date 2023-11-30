export default function CustomToastMessage({
  message,
  link,
}: {
  message: string;
  link: string;
}): JSX.Element {
  return (
    <span className="flex flex-col">
      {message}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        View on Etherscan
      </a>
    </span>
  );
}
