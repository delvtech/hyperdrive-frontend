/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface EntityAmount {
  /**
   * amount in lowest denomination
   * @example ""
   */
  amount?: string;
  amountUSD?: number;
}

export enum EntityChainID {
  Ethereum = 1,
  Arbitrum = 42161,
  Optimism = 10,
  Polygon = 137,
  Base = 8453,
  Avalanche = 43114,
  Gnosis = 100,
}

export interface EntityFungibleToken {
  /**
   * Maps chain id to token address on that chain
   * @example {"1":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"}
   */
  addresses?: Record<string, string>;
  decimals?: number;
  logoURI?: string;
  name?: string;
  symbol?: string;
}

export interface EntityNetwork {
  chainID?: EntityChainID;
  chainType?: string;
  name?: string;
  rpcurls?: string[];
  logoURI?: string;
}

export interface EntityTokenTransferQuote {
  destinationChain?: EntityChainID;
  destinationTokenAddress?: string;
  /** how long transfer will take in seconds */
  duration?: number;
  fee?: EntityAmount;
  gasCost?: EntityAmount;
  senderAddress?: string;
  sourceChain?: EntityChainID;
  sourceTokenAddress?: string;
  tool?: EntityTool;
  /** transaction request to be sent to the wallet */
  transaction?: EntityTransaction;
}

export interface EntityTool {
  logoURI?: string;
  name?: string;
}

export interface EntityTransaction {
  chainId?: EntityChainID;
  data?: string;
  from?: string;
  gasLimit?: string;
  gasPrice?: string;
  to?: string;
  value?: string;
}

export interface ServerAccountFungibleBalanceHandlerResponse {
  data?: ServerChainBalance[];
}

export interface ServerAggregateBalanceSolutionHandlerResponse {
  data?: EntityTokenTransferQuote[];
}

export interface ServerErrorResponse {
  error?: string;
}

export interface ServerGetFungibleTokensByChainHandlerResponse {
  data?: EntityFungibleToken[];
}

export interface ServerGetNetworksHandlerResponse {
  data?: EntityNetwork[];
}

export interface ServerGetSupportedFungibleTokensResponse {
  data?: EntityFungibleToken[];
}

export interface ServerHealthHandlerResponse {
  status?: string;
}

export interface ServerChainBalance {
  /**
   * token balance in lowest denomination
   * @example "123"
   */
  balance?: string;
  chainId?: number;
  tokenDecimals?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title No title
 * @baseUrl /
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  accounts = {
    /**
     * @description Returns cross chain account balance in lowest denomination for supported fungible token
     *
     * @name AssetsFungibleDetail
     * @summary Returns cross chain account balance for supported fungible token
     * @request GET:/accounts/{account}/assets/fungible/{token}
     */
    assetsFungibleDetail: (
      token: string,
      account: string,
      params: RequestParams = {},
    ) =>
      this.request<
        ServerAccountFungibleBalanceHandlerResponse,
        ServerErrorResponse
      >({
        path: `/accounts/${account}/assets/fungible/${token}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  assets = {
    /**
     * No description
     *
     * @name FungibleList
     * @summary Returns supported tokens
     * @request GET:/assets/fungible
     */
    fungibleList: (params: RequestParams = {}) =>
      this.request<ServerGetSupportedFungibleTokensResponse, any>({
        path: `/assets/fungible`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Using given token name or symbol it will return fungible token details
     *
     * @name FungibleDetail
     * @summary Returns supported fungible token details
     * @request GET:/assets/fungible/{token}
     */
    fungibleDetail: (token: string, params: RequestParams = {}) =>
      this.request<EntityFungibleToken, ServerErrorResponse>({
        path: `/assets/fungible/${token}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  health = {
    /**
     * @description health check
     *
     * @name HealthList
     * @summary health check
     * @request GET:/health
     */
    healthList: (params: RequestParams = {}) =>
      this.request<ServerHealthHandlerResponse, any>({
        path: `/health`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  networks = {
    /**
     * No description
     *
     * @name NetworksList
     * @summary Returns all supported networks
     * @request GET:/networks
     */
    networksList: (params: RequestParams = {}) =>
      this.request<ServerGetNetworksHandlerResponse, any>({
        path: `/networks`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AssetsFungibleDetail
     * @summary Returns supported tokens on a chain defined by given chainID
     * @request GET:/networks/{chainID}/assets/fungible
     */
    assetsFungibleDetail: (chainId: number, params: RequestParams = {}) =>
      this.request<
        ServerGetFungibleTokensByChainHandlerResponse,
        ServerErrorResponse
      >({
        path: `/networks/${chainId}/assets/fungible`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  solutions = {
    /**
     * @description Endpoint will calculate best combination of single-hop transfers to
     *
     * @name AggregationList
     * @summary Returns solution to aggregate fungible token balance on desination
     * @request GET:/solutions/aggregation
     */
    aggregationList: (
      query: {
        /** account address in hex format with 0x which will send and receive funds */
        account: string;
        /** id of destination chain */
        destination: number;
        /** supported token name or symbol */
        token: string;
        /** min targeted amount of tokens on destination in lowest denomination */
        amount: string;
        /** min amount of tokensto leave on source in lowest denomination */
        threshold?: string;
        /** comma separated list of source chain ids that can be used */
        whitelistedSourceChains?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ServerAggregateBalanceSolutionHandlerResponse,
        ServerErrorResponse
      >({
        path: `/solutions/aggregation`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
