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
  iconUrl:
    "https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png?1696528764",
};

export const protocols = {
  maker,
  lido,
  morpho,
} as const;
