import { ContractReadOptions, FunctionReturn } from "@delvtech/evm-client";
import { Address } from "abitype";
import { Constructor } from "src/base/types";
import { ReadHyperdriveOptions } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import {
  ReadErc4626Hyperdrive,
  ReadErc4626HyperdriveMixin,
} from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { AdaptiveIRMAbi, MetaMorphoAbi, MorphoBlueAbi } from "./abi";

export class ReadMetaMorphoHyperdrive extends readMetaMorphoHyperdriveMixin(
  ReadErc4626Hyperdrive,
) {}

type MarketParams = FunctionReturn<typeof MorphoBlueAbi, "idToMarketParams">;
type Market = FunctionReturn<typeof MorphoBlueAbi, "market">;

const pow10 = (exponant: bigint | number) => 10n ** BigInt(exponant);
const WAD = pow10(18);
const SECONDS_PER_YEAR = 3600 * 24 * 365;

const wMulDown = (x: bigint, y: bigint): bigint => mulDivDown(x, y, WAD);
// const wDivDown = (x: bigint, y: bigint): bigint => mulDivDown(x, WAD, y);
const wDivUp = (x: bigint, y: bigint): bigint => mulDivUp(x, WAD, y);
const mulDivDown = (x: bigint, y: bigint, d: bigint): bigint => (x * y) / d;
const mulDivUp = (x: bigint, y: bigint, d: bigint): bigint =>
  (x * y + (d - 1n)) / d;

const wTaylorCompounded = (x: bigint, n: bigint): bigint => {
  const firstTerm = x * n;
  const secondTerm = mulDivDown(firstTerm, firstTerm, 2n * WAD);
  const thirdTerm = mulDivDown(secondTerm, firstTerm, 3n * WAD);
  return firstTerm + secondTerm + thirdTerm;
};

/**
 * @internal
 */
export interface ReadMetaMorphoHyperdriveMixin
  extends ReadErc4626HyperdriveMixin {
  getYieldSourceRate(options?: {
    options?: ContractReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readMetaMorphoHyperdriveMixin<
  T extends Constructor<ReadErc4626Hyperdrive>,
>(Base: T): Constructor<ReadMetaMorphoHyperdriveMixin> & T {
  return class extends Base {
    constructor(...[options]: any[]) {
      const {
        name = "MetaMorpho Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });
    }

    async getYieldSourceRate(options?: ContractReadOptions): Promise<bigint> {
      // const vault = await this.getSharesToken(options);
      // const totalAmount = await vault.getTotalAssets(options);

      const metaMorpho = await this.getMetaMorpho(options);
      const morphoBlue = await this.getMorpho(options);

      const withdrawQueueLength = await metaMorpho.read(
        "withdrawQueueLength",
        {},
        options,
      );

      for (let i = 0n; i < withdrawQueueLength; i++) {
        const marketId = await metaMorpho.read("withdrawQueue", [i]);
        const marketParams = await morphoBlue.read("idToMarketParams", [
          marketId,
        ]);
        const market = await morphoBlue.read("market", [marketId], options);

        // morpho.expectedSupplyAssets(marketParams, vault);

        const supplyAPYMarket = await this.getSupplyRateMarket(
          marketParams,
          market,
        );

        console.log(supplyAPYMarket);
        // ratio += wMulDown(supplyAPYMarket, vaultAsset);
      }

      //
      return 0n;
    }

    // https://docs.morpho.org/contracts/morpho-blue/guides/track-positions/
    private async getSupplyRateMarket(
      marketParams: MarketParams,
      market: Market,
      options?: ContractReadOptions,
    ) {
      const irm = this.contractFactory({
        abi: AdaptiveIRMAbi,
        address: marketParams.irm,
      });

      // check for irm is zero address

      const borrowRate = await irm.read(
        "borrowRateView",
        {
          marketParams,
          market,
        },
        options,
      );

      const borrowAPY = wTaylorCompounded(borrowRate, BigInt(SECONDS_PER_YEAR));

      const marketTotalBorrow = market.totalBorrowAssets;
      const marketTotalSupply = market.totalSupplyAssets;

      const utilization = wDivUp(marketTotalBorrow, marketTotalSupply);
      const supplyAPY = wMulDown(
        wMulDown(borrowAPY, WAD - market.fee),
        utilization,
      );

      return supplyAPY;
    }

    private async getMetaMorpho(options?: ContractReadOptions) {
      const vault = await this.getSharesToken(options);
      return this.contractFactory({
        abi: MetaMorphoAbi,
        address: vault.address,
      });
    }

    private async getMorpho(options?: ContractReadOptions) {
      const metaMorpho = await this.getMetaMorpho(options);
      return this.contractFactory({
        abi: MorphoBlueAbi,
        address: await metaMorpho.read("MORPHO"),
      });
    }
  };
}

// function expectedMarketBalances(IMorpho morpho, MarketParams memory marketParams)
// internal
// view
// returns (uint256, uint256, uint256, uint256)
// {
// Id id = marketParams.id();
// Market memory market = morpho.market(id);

// uint256 elapsed = block.timestamp - market.lastUpdate;

// // Skipped if elapsed == 0 or totalBorrowAssets == 0 because interest would be null, or if irm == address(0).
// if (elapsed != 0 && market.totalBorrowAssets != 0 && marketParams.irm != address(0)) {
//     uint256 borrowRate = IIrm(marketParams.irm).borrowRateView(marketParams, market);
//     uint256 interest = market.totalBorrowAssets.wMulDown(borrowRate.wTaylorCompounded(elapsed));
//     market.totalBorrowAssets += interest.toUint128();
//     market.totalSupplyAssets += interest.toUint128();

//     if (market.fee != 0) {
//         uint256 feeAmount = interest.wMulDown(market.fee);
//         // The fee amount is subtracted from the total supply in this calculation to compensate for the fact
//         // that total supply is already updated.
//         uint256 feeShares =
//             feeAmount.toSharesDown(market.totalSupplyAssets - feeAmount, market.totalSupplyShares);
//         market.totalSupplyShares += feeShares.toUint128();
//     }
// }

// return (market.totalSupplyAssets, market.totalSupplyShares, market.totalBorrowAssets, market.totalBorrowShares);
// }

function supplyAPYVault(vaultAddress: Address) {
  // get SupplyCaps of market
}

// function supplyAPYMarket(MarketParams memory marketParams, Market memory market)
//         public
//         view
//         returns (uint256 supplyApy)
//     {
//         // Get the borrow rate
//         uint256 borrowRate;
//         if (marketParams.irm == address(0)) {
//             return 0;
//         } else {
//             borrowRate = IIrm(marketParams.irm).borrowRateView(marketParams, market).wTaylorCompounded(365 days);
//         }

//         (uint256 totalSupplyAssets,, uint256 totalBorrowAssets,) = morpho.expectedMarketBalances(marketParams);

//         // Get the supply rate
//         uint256 utilization = totalBorrowAssets == 0 ? 0 : totalBorrowAssets.wDivUp(totalSupplyAssets);

//         supplyApy = borrowRate.wMulDown(1 ether - market.fee).wMulDown(utilization);
//     }

//     /// @notice Returns the current APY of a MetaMorpho vault.
//     /// @dev It is computed as the sum of all APY of enabled markets weighted by the supply on these markets.
//     /// @param vault The address of the MetaMorpho vault.
//     function supplyAPYVault(address vault) public view returns (uint256 avgSupplyApy) {
//         uint256 ratio;
//         uint256 queueLength = IMetaMorpho(vault).withdrawQueueLength();

//         uint256 totalAmount = totalDepositVault(vault);

//         for (uint256 i; i < queueLength; ++i) {
//             Id idMarket = IMetaMorpho(vault).withdrawQueue(i);

//             MarketParams memory marketParams = morpho.idToMarketParams(idMarket);
//             Market memory market = morpho.market(idMarket);

//             uint256 currentSupplyAPY = supplyAPYMarket(marketParams, market);
//             uint256 vaultAsset = vaultAssetsInMarket(vault, marketParams);
//             ratio += currentSupplyAPY.wMulDown(vaultAsset);
//         }

//         avgSupplyApy = ratio.mulDivDown(WAD - IMetaMorpho(vault).fee(), totalAmount);
//     }

// function totalDepositVault(address vault) public view returns (uint256 totalAssets) {
//   totalAssets = IMetaMorpho(vault).totalAssets();
// }
