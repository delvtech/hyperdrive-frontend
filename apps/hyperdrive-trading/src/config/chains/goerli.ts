import { HyperdriveConfig, Protocol, Token } from "src/config/HyperdriveConfig";

/* Supported Protocols */
const MakerProtocol: Protocol = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

const MockProtocol: Protocol = {
  name: "Mock",
};

const YearnProtocol: Protocol = {
  name: "Yearn",
  iconUrl: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=024",
};

const supportedProtocols: readonly Protocol[] = [
  MakerProtocol,
  MockProtocol,
  YearnProtocol,
] as const;

const daiBaseToken: Token = {
  name: "DAI",
  symbol: "DAI",
  address: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
  decimals: 18,
  iconUrl:
    "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024",
};

const usdcBaseToken: Token = {
  name: "USDC",
  symbol: "USDC",
  address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
  decimals: 6,
  iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=024",
};

export const goerliHyperdriveConfig: HyperdriveConfig<
  typeof supportedProtocols
> = {
  chainId: 5,
  markets: [
    {
      name: "Maker DSR",
      address: "0x8C9Ccd26fFB734658171EE2B0C6d087e72752c20",
      baseToken: daiBaseToken,
      protocol: MakerProtocol,
      termLength: 12,
    },
    // Stubbed below
    {
      name: "DAI Vault",
      address: "0x7C9Ccd26fFB734658171EE2B0C6d087e72752c20",
      baseToken: usdcBaseToken,
      protocol: YearnProtocol,
      termLength: 3,
    },
    {
      name: "DAI Vault",
      address: "0x9C9Ccd26fFB734658171EE2B0C6d087e72752c20",
      baseToken: usdcBaseToken,
      protocol: YearnProtocol,
      termLength: 6,
    },
    {
      name: "DAI Vault",
      address: "0x4C9Ccd26fFB734658171EE2B0C6d087e72752c20",
      baseToken: usdcBaseToken,
      protocol: YearnProtocol,
      termLength: 12,
    },
  ],
};
