import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";

export interface YieldSource {
  name: string;
  shortName: string;
  protocol: keyof typeof yieldSourceProtocols;
  iconUrl: string;
}

export const makerDsr: YieldSource = {
  name: "Maker Dai Savings Rate",
  shortName: "Maker DSR",
  protocol: "maker",
  // TODO: Replace this with an sDAI logo
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

export const lidoSteth: YieldSource = {
  name: "Lido Staked Ether",
  shortName: "stETH",
  protocol: "lido",
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4N2Y3ZWEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13YW5kLTIiPjxwYXRoIGQ9Im0yMS42NCAzLjY0LTEuMjgtMS4yOGExLjIxIDEuMjEgMCAwIDAtMS43MiAwTDIuMzYgMTguNjRhMS4yMSAxLjIxIDAgMCAwIDAgMS43MmwxLjI4IDEuMjhhMS4yIDEuMiAwIDAgMCAxLjcyIDBMMjEuNjQgNS4zNmExLjIgMS4yIDAgMCAwIDAtMS43MloiLz48cGF0aCBkPSJtMTQgNyAzIDMiLz48cGF0aCBkPSJNNSA2djQiLz48cGF0aCBkPSJNMTkgMTR2NCIvPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNNyA4SDMiLz48cGF0aCBkPSJNMjEgMTZoLTQiLz48cGF0aCBkPSJNMTEgM0g5Ii8+PC9zdmc+",
};

export const yieldSources = {
  makerDsr,
  lidoSteth,
} as const;
