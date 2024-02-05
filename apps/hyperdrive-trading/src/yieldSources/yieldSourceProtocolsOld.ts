/**
 * @deprecated use @hyperdrive/appconfig instead
 */
export interface YieldSourceProtocolOld {
  name: string;
  iconUrl: string;
}

const lido: YieldSourceProtocolOld = {
  name: "Lido",
  iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
};

const maker: YieldSourceProtocolOld = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

/**
 * @deprecated use @hyperdrive/appconfig instead
 */
export const yieldSourceProtocolsOld = {
  maker,
  lido,
} as const;
