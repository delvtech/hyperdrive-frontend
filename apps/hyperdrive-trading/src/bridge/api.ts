import { Api } from "@delvtech/gopher";
import { setupWorker } from "msw/browser";
import { getSupportedNetworksStub } from "src/bridge/stubs/chains";
import {
  getServerAggregateBalanceSolutionHandlerStub,
  postServerAggregateBalanceSolutionHandlerStub,
} from "src/bridge/stubs/solution";
import { getSupportedFungibleTokensStub } from "./stubs/assets";
import { getServerAccountFungibleBalanceHandlerStub } from "./stubs/balances";

export const BASE_URL = "https://gopher.test.buildwithsygma.com";
export const SWAGGER_JSON_URL = `${BASE_URL}/swagger/doc.json`;

export const gopher = new Api({
  baseUrl: BASE_URL,
});

export const worker = setupWorker(
  getSupportedFungibleTokensStub(BASE_URL),
  getServerAccountFungibleBalanceHandlerStub(BASE_URL),
  getSupportedNetworksStub(BASE_URL),
  getServerAggregateBalanceSolutionHandlerStub(BASE_URL),
  postServerAggregateBalanceSolutionHandlerStub(BASE_URL),
);
