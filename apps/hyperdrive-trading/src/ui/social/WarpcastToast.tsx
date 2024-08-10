import toast from "react-hot-toast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";

export function toastWarpcast(waitMs = SUCCESS_TOAST_DURATION): void {
  setTimeout(() => {
    toast.success(
      <span className="flex flex-col">
        <span className="gradient-text">Share your trade!</span>
        <a
          href="https://warpcast.com/~/compose?text=Can%20you%20outtrade%20me%20on%20Hyperdrive%3F%20Warp%20your%20best%20Hyperdrive%20trade%20screenshot%20below%20%F0%9F%93%88%20%2Fdelv&embeds[]=https://frames.hyperdrive.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="daisy-link-hover daisy-link mt-1 cursor-pointer text-sm"
        >
          Cast on Warpcast
        </a>
      </span>,
      {
        id: "warpcast-toast",
        duration: 7500,
        icon: (
          <img
            className="h-10"
            src="https://github.com/vrypan/farcaster-brand/blob/main/icons/icon-transparent/transparent-purple.png?raw=true"
          />
        ),
      },
    );
  }, waitMs);
}
