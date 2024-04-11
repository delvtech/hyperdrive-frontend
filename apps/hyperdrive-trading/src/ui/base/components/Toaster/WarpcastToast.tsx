import toast from "react-hot-toast";

export default function WarpcastToast(): JSX.Element {
  return (
    <span className="flex flex-col">
      <span className="gradient-text">Share your trade!</span>
      <a
        href="https://warpcast.com/~/compose?text=Hello%20world!&embeds[]=https://frames.hyperdrive.trade"
        target="_blank"
        rel="noopener noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        Warp on Warpcast
      </a>
    </span>
  );
}

export function callWarpcastToast(): void {
  toast.success(
    <span className="flex flex-col">
      <span className="gradient-text">Share your trade!</span>
      <a
        href="https://warpcast.com/~/compose?text=Hello%20world!&embeds[]=https://frames.hyperdrive.trade"
        target="_blank"
        rel="noopener noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        Warp on Warpcast
      </a>
    </span>,
    {
      id: "warpcast-toast",
      duration: 5000,
      icon: (
        <img
          className="h-10"
          src="https://github.com/vrypan/farcaster-brand/blob/main/icons/icon-transparent/transparent-purple.png?raw=true"
        />
      ),
    },
  );
}
