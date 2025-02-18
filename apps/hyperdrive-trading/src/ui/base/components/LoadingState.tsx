import { NonIdealState } from "src/ui/base/components/NonIdealState";

export default function LoadingState({
  text,
  heading,
}: {
  text?: string;
  heading?: string;
}): JSX.Element {
  return (
    <div className="mx-10 my-28 flex flex-col items-center justify-center">
      <NonIdealState
        heading={heading}
        action={
          // Use the action prop to position the spinner below the heading, preventing layout shifts.
          // This ensures a smooth transition when LoadingState is replaced by NonIdealState due to an empty request result.
          <div className="daisy-loading daisy-loading-spinner daisy-loading-lg text-primary" />
        }
        text={text || null}
      />
    </div>
  );
}
