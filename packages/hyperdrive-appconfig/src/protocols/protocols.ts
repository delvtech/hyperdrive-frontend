export interface Protocol {
  name: string;
  iconUrl: string;
}

const lido: Protocol = {
  name: "Lido",
  iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
};

const maker: Protocol = {
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

const morpho: Protocol = {
  name: "Morpho",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

export const protocols = {
  maker,
  lido,
  morpho,
} as const;
