import { XMarkIcon } from "@heroicons/react/24/outline";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function ToastProvider(): JSX.Element {
  return (
    <Toaster
      toastOptions={{
        duration: Infinity,
        className: "!p-0 !bg-base-200 !rounded-box",
      }}
      position="top-right"
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="daisy-alert !bg-gray-700 shadow-2xl">
              {icon}
              <span>{message}</span>

              <button
                onClick={() => toast.dismiss(t.id)}
                className="daisy-btn daisy-btn-xs"
              >
                <XMarkIcon className="h-6 cursor-pointer rounded-full p-1" />
              </button>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
