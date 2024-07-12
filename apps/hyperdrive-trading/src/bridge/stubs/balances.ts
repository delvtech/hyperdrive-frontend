import { ServerAccountFungibleBalanceHandlerResponse } from "@delvtech/gopher";
import { HttpResponse as HttpResponseMSW, RequestHandler, http } from "msw";

export function getServerAccountFungibleBalanceHandlerStub(
  baseUrl: string,
): RequestHandler {
  return http.get(
    `${baseUrl}/accounts/:account/assets/fungible/:token`,
    ({ params }) => {
      const token = params["token"];
      const response: ServerAccountFungibleBalanceHandlerResponse = {
        data: [
          {
            tokenDecimals: 18,
            chainId: 84532,
            balance: token === "DAI" ? "100.0" : "0.0",
          },
          {
            tokenDecimals: 18,
            chainId: 1993,
            balance: token === "DAI" ? "100.0" : "0.0",
          },
          {
            tokenDecimals: 18,
            chainId: 11155111,
            balance: token === "DAI" ? "100.0" : "0.0",
          },
        ],
      };
      const status = {
        status: 202,
        statusText: "Mocked status",
      };

      return HttpResponseMSW.json(response, status);
    },
  );
}
