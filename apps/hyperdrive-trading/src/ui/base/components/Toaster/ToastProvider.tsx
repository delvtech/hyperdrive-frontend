import { XMarkIcon } from "@heroicons/react/24/outline";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function ToastProvider(): JSX.Element {
  return (
    <Toaster toastOptions={{ duration: 5000 }} position="top-right">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="mx-4 flex flex-row">
              {icon}
              {message}
              {t.type !== "loading" && (
                <div className="flex items-center justify-center">
                  <XMarkIcon
                    className="h-6 cursor-pointer rounded-full p-1"
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
