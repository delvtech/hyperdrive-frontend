import { rewardsMainnetFork } from "src/chains/cloudChain";
import {
  AERO_ICON_URL,
  MORPHO_ICON_URL,
  WELL_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import { TokenConfig } from "src/tokens/types";
import { base, mainnet } from "viem/chains";

/**
 * Yield sources may offer rewards in tokens that are not part of Hyperdrive.
 * For example, a yield source might reward WELL tokens, even though there is no
 * WELL Hyperdrive pool. The `knownTokenConfigs` object below specifies any such
 * non-Hyperdrive tokens that are required.
 */

export const knownTokenConfigs2: TokenConfig[] = [
  {
    address: "0xA88594D404727625A9437C3f886C7643872296AE",
    chainId: base.id,
    name: "WELL",
    symbol: "WELL",
    decimals: 18,
    places: 4,
    iconUrl: WELL_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },
  {
    address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
    chainId: base.id,
    name: "Aerodrome",
    symbol: "AERO",
    decimals: 18,
    places: 4,
    iconUrl: AERO_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },
  {
    address: "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
    chainId: base.id,
    name: "Morpho Token",
    symbol: "MORPHO",
    decimals: 18,
    places: 4,
    iconUrl: MORPHO_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },
  {
    address: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    chainId: mainnet.id,
    name: "Morpho Token",
    symbol: "MORPHO",
    decimals: 18,
    places: 4,
    iconUrl: MORPHO_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },
  {
    address: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    chainId: rewardsMainnetFork.id,
    name: "Morpho Token",
    symbol: "MORPHO",
    decimals: 18,
    places: 4,
    iconUrl: MORPHO_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },

  {
    address: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    chainId: mainnet.id,
    name: "Legacy Morpho Token",
    symbol: "MORPHO",
    decimals: 18,
    places: 4,
    iconUrl: MORPHO_ICON_URL,
    tags: [],
    priceOracle: "defillama",
  },
];
