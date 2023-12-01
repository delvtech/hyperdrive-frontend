import { XMarkIcon } from "@heroicons/react/24/outline";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function ToastProvider(): JSX.Element {
  return (
    <Toaster position="top-right">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="mx-4 flex flex-row">
              {icon}
              {message}
              {t.type !== "loading" && (
                <div className="flex items-center justify-center">
                  <XMarkIcon
                    className="h-6 cursor-pointer rounded-full bg-base-200 p-1"
                    onClick={() => toast.dismiss(t.id)}
                  />
                </div>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
