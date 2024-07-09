import { ServerGetSupportedFungibleTokensResponse } from "@delvtech/gopher";
import { HttpResponse as HttpResponseMSW, RequestHandler, http } from "msw";

export function getSupportedFungibleTokensStub(
  baseUrl: string,
): RequestHandler {
  return http.get(`${baseUrl}/assets/fungible`, () => {
    const response: ServerGetSupportedFungibleTokensResponse = {
      data: [
        {
          addresses: {},
          decimals: 9,
          logoURI:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          symbol: "SOL",
          name: "Solana",
        },
        {
          name: "USDC",
          decimals: 6,
          symbol: "USDC",
          logoURI:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
          addresses: {
            "1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "10": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            "100": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
            "137": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
            "8453": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "42161": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            "43114": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
          },
        },
        {
          name: "TetherUSD",
          decimals: 6,
          symbol: "USDT",
          logoURI:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
          addresses: {
            "1": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "10": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            "100": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
            "137": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            "8453": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
            "42161": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            "43114": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
          },
        },
        {
          name: "DAI Stablecoin",
          decimals: 18,
          symbol: "DAI",
          logoURI:
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
          addresses: {
            "1": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "10": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "137": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            "8453": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
            "42161": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "43114": "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
          },
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
