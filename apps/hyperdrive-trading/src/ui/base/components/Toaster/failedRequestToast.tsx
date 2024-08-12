import toast from "react-hot-toast";

const id = "failed-request-toast";

export function failedRequestToast(): void {
  toast.error(
    <span className="flex flex-col">
      <span className="text-error">Network request failed.</span>
      <span className="text-neutral-content">
        Please check your connection and try again.
      </span>
    </span>,
    { id },
  );
}
