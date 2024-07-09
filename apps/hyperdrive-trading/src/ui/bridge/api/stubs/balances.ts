import { ServerAccountFungibleBalanceHandlerResponse } from "@delvtech/gopher";
import { HttpResponse as HttpResponseMSW, RequestHandler, http } from "msw";

export function getServerAccountFungibleBalanceHandlerStub(
  baseUrl: string,
): RequestHandler {
  return http.get(`${baseUrl}/accounts/:account/assets/fungible/:token`, () => {
    const response: ServerAccountFungibleBalanceHandlerResponse = {
      data: [
        {
          tokenDecimals: 18,
          chainId: 84532,
          balance: "100.0",
        },
        {
          tokenDecimals: 18,
          chainId: 1993,
          balance: "100.0",
        },
        {
          tokenDecimals: 18,
          chainId: 11155111,
          balance: "100.0",
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
