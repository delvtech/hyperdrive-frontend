import {
  EntityChainID,
  ServerGetNetworksHandlerResponse,
} from "@delvtech/gopher";
import { HttpResponse as HttpResponseMSW, RequestHandler, http } from "msw";

export function getSupportedNetworksStub(baseUrl: string): RequestHandler {
  return http.get(`${baseUrl}/networks`, () => {
    const response: ServerGetNetworksHandlerResponse = {
      data: [
        {
          chainType: "evm",
          name: "Sepolia",
          chainID: 11155111 as EntityChainID,
          rpcURLs: ["https://rpc.sepolia.org"],
          logoURI: "https://scan.buildwithsygma.com/assets/icons/sepolia.svg",
        },
        {
          chainType: "evm",
          name: "B3Sepolia",
          chainID: 1993 as EntityChainID,
          rpcURLs: ["https://b3sepolia-rpc.publicnode.com"],
          logoURI: "https://scan.buildwithsygma.com/assets/icons/b3sepolia.svg",
        },
        {
          chainType: "evm",
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
