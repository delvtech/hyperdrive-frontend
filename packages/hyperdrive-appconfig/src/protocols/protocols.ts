export interface Protocol {
  id: keyof typeof protocols;
  name: string;
  iconUrl: string;
}

const lido: Protocol = {
  id: "lido",
  name: "Lido",
  iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
};

const maker: Protocol = {
  id: "maker",
  name: "Maker",
  iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
};

const morpho: Protocol = {
  id: "morpho",
  name: "Morpho",
  iconUrl:
    "https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png?1696528764",
};

const rocketPool: Protocol = {
  id: "rocketPool",
  name: "Rocket Pool",
  iconUrl:
    "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1696503058",
};

const renzo: Protocol = {
  id: "renzo",
  name: "Renzo",
  iconUrl:
    "https://file.notion.so/f/f/8918534a-08b2-4581-8604-0c70c8725edf/8104f9b0-980c-4e9e-a9a3-49f0b741d99e/renzo_logo_green_on_transparent.svg?id=9000598a-f94c-492d-8f5a-ac09e441319d&table=block&spaceId=8918534a-08b2-4581-8604-0c70c8725edf&expirationTimestamp=1715385600000&signature=jn2uDGG1CTn2NjRZ4IC8hOxp7uXEcxcl56PrQN7Ly2U&downloadName=renzo+logo+green+on+transparent.svg",
};

export const protocols = {
  maker,
  lido,
  morpho,
  rocketPool,
  renzo,
} as const;
