export default function CustomBanner({
  description,
}: {
  description: string;
}): JSX.Element {
  return (
    <div className="daisy-alert">
      <span>{description}</span>
    </div>
  );
}
