import {
  aeroUsdcAero,
  cbeth,
  morphoCbethUsdc,
  mwEth,
  mwEurc,
  mwUsdc,
  snars,
  stkWell,
} from "src/yieldSources/base";
import { gnosisSgyd, gnosisWsteth, sxdai } from "src/yieldSources/gnosis";
import { lineaEzeth, rseth } from "src/yieldSources/linea";
import {
  eeth,
  ezeth,
  lidoSteth,
  makerDsr,
  morphoSusdeDai,
  morphoUsdeDai,
  morphoWstethUsda,
  morphoWstethUsdc,
  reth,
  sgyd,
  stusd,
  susde,
  susds,
  usds,
} from "src/yieldSources/mainnet";

export const yieldSources = {
  eeth,
  makerDsr,
  lidoSteth,
  morphoSusdeDai,
  morphoUsdeDai,
  morphoWstethUsdc,
  morphoWstethUsda,
  morphoCbethUsdc,
  reth,
  ezeth,
  gnosisWsteth,
  sxdai,
  cbeth,
  stusd,
  lineaEzeth,
  rseth,
  usds,
  susds,
  mwEth,
  stkWell,
  snars,
  mwEurc,
  mwUsdc,
  aeroUsdcAero,
  susde,
  sgyd,
  gnosisSgyd,
} as const;

export type YieldSourceId = keyof typeof yieldSources;
export type YieldSource = (typeof yieldSources)[YieldSourceId];
