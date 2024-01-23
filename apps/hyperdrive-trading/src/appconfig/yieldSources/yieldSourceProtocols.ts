export interface YieldSourceProtocol {
  name: string;
  iconUrl: string;
}

const lido: YieldSourceProtocol = {
  name: "Lido",
  iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
};

const maker: YieldSourceProtocol = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

export const yieldSourceProtocols = {
  maker,
  lido,
} as const;
