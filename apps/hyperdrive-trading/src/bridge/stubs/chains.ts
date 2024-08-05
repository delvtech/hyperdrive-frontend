import type {
  EntityChainID,
  ServerGetNetworksHandlerResponse,
} from "@delvtech/gopher";
import {
  http,
  HttpResponse as HttpResponseMSW,
  type RequestHandler,
} from "msw";

export function getSupportedNetworksStub(baseUrl: string): RequestHandler {
  return http.get(`${baseUrl}/networks`, () => {
    const response: ServerGetNetworksHandlerResponse = {
      data: [
        {
          chainType: "evm",
          blockTime: 12,
          name: "Sepolia",
          chainID: 11155111 as EntityChainID,
          rpcURLs: ["https://rpc.sepolia.org"],
          logoURI: "https://scan.buildwithsygma.com/assets/icons/sepolia.svg",
        },
        {
          chainType: "evm",
          blockTime: 12,
          name: "B3Sepolia",
          chainID: 1993 as EntityChainID,
          rpcURLs: ["https://b3sepolia-rpc.publicnode.com"],
          logoURI: "https://scan.buildwithsygma.com/assets/icons/b3sepolia.svg",
        },
        {
          chainType: "evm",
          blockTime: 12,
          name: "BaseSepolia",
          chainID: 84532 as EntityChainID,
          rpcURLs: ["https://sepolia.base.org"],
          logoURI:
            "https://scan.buildwithsygma.com/assets/icons/basesepolia.svg",
        },
      ],
    };
    const status = {
      status: 202,
      statusText: "Mocked status",
    };

    return HttpResponseMSW.json(response, status);
  });
}
