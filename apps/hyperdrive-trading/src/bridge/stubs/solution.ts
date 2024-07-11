import {
  EntityChainID,
  EntityTokenTransferQuote,
  ServerAggregateBalanceSolutionHandlerResponse,
} from "@delvtech/gopher";
import { HttpResponse as HttpResponseMSW, RequestHandler, http } from "msw";

interface AggregationQueryParams {
  account: string;
  /** id of destination chain */
  destination: string;
  /** supported token name or symbol */
  token: string;
  /** min targeted amount of tokens on destination in lowest denomination */
  amount: string;
  /** min amount of tokensto leave on source in lowest denomination */
  threshold: string;
  /** comma separated list of source chain ids that can be used */
  whitelistedSourceChains: string;
}

export function getServerAggregateBalanceSolutionHandlerStub(
  baseUrl: string,
): RequestHandler {
  return http.get<AggregationQueryParams>(
    `${baseUrl}/solutions/aggregation`,
    ({ request }) => {
      const url = new URL(request.url);
      const sampleResponseData: EntityTokenTransferQuote = {
        amount: "1",
        tool: { logoURI: "https://gopher.finance/logo.png", name: "Gopher" },
        approvals: [],
        destinationChain: 115511 as EntityChainID,
        destinationTokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        duration: 300,
        fee: {
          amount: "0.01",
          amountUSD: 0.01,
        },
        gasCost: {
          amount: "0.002",
          amountUSD: 0.01,
        },
        senderAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        sourceChain: 84532 as EntityChainID,
        sourceTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        transaction: {
          chainId: 84532,
          to: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
          data: "0x38ed1739000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000742d35cc6634c0532925a3b844bc454e4438f44e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000006b175474e89094c44da98b954eedeac495271d0f",
          value: "0",
          from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          gasLimit: "200000",
          gasPrice: "20000000000",
        },
      };

      const amount = Number(url.searchParams.get("amount"));

      if (amount > 0 && amount <= 100) {
        const status = {
          status: 200,
          statusText: "Mocked status",
        };
        const response: ServerAggregateBalanceSolutionHandlerResponse = {
          data: [{ ...sampleResponseData, amount: String(amount) }],
        };

        return HttpResponseMSW.json(response, status);
      } else if (amount > 100 && amount <= 200) {
        const status = {
          status: 200,
          statusText: "Mocked status",
        };
        const response: ServerAggregateBalanceSolutionHandlerResponse = {
          data: [
            {
              ...sampleResponseData,
              amount: "100.0",
              sourceChain: 84532 as EntityChainID,
            },
            {
              ...sampleResponseData,
              amount: String(amount - 100),
              sourceChain: 1993 as EntityChainID,
            },
          ],
        };

        return HttpResponseMSW.json(response, status);
      }

      const status = {
        status: 400,
        statusText: "No solution found",
      };
      return HttpResponseMSW.json({}, status);
    },
  );
}

export function postServerAggregateBalanceSolutionHandlerStub(
  baseUrl: string,
): RequestHandler {
  return http.post<AggregationQueryParams>(
    `${baseUrl}/solutions/aggregation`,
    async () => {
      const sampleResponseData: EntityTokenTransferQuote = {
        amount: "1",
        approvals: [],
        tool: { logoURI: "https://gopher.finance/logo.png", name: "Gopher" },
        destinationChain: 115511 as EntityChainID,
        destinationTokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        duration: 300,
        fee: {
          amount: "0.01",
          amountUSD: 0.01,
        },
        gasCost: {
          amount: "0.002",
          amountUSD: 0.01,
        },
        senderAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        sourceChain: 137,
        sourceTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        transaction: {
          chainId: 84532,
          to: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
          data: "0x38ed1739000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000742d35cc6634c0532925a3b844bc454e4438f44e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000006b175474e89094c44da98b954eedeac495271d0f",
          value: "0",
          from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          gasLimit: "200000",
          gasPrice: "20000000000",
        },
      };

      const response: ServerAggregateBalanceSolutionHandlerResponse = {
        data: [sampleResponseData],
      };

      const status = {
        status: 202,
        statusText: "Mocked status",
      };

      return HttpResponseMSW.json(response, status);
    },
  );
}
