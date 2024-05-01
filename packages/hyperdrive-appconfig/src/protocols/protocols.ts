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

const rocketPool: Protocol = {
  name: "Rocket Pool",
  iconUrl:
    "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1696503058",
};

export const protocols = {
  maker,
  lido,
  morpho,
  rocketPool,
} as const;
