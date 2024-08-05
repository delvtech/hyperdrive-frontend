import type { FunctionReturn } from "@delvtech/evm-client";
import type { Override } from "src/base/types";
import type { ReadFactory } from "src/factory/ReadFactory";
import type { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import type { RegistryAbi } from "src/registry/abi";

/**
 * The info collected for each Hyperdrive factory along with the metadata
 * associated with each instance.
 */
export type FactoryInfoWithMetadata = Override<
  FunctionReturn<RegistryAbi, "getFactoryInfoWithMetadata">,
  {
    /**
     * Data about the factory. Different registries can utilize different
     * schemas for these values.
     */
    data: `0x${string}`;
  }
>;

/**
 * The info related to each Hyperdrive instance along with the metadata
 * associated with each instance.
 */
export type ReadInstanceInfoWithMetadata = Override<
  FunctionReturn<RegistryAbi, "getInstanceInfoWithMetadata">,
  {
    /**
     * Data about the instance. Different registries can utilize different
     * schemas for these values.
     */
    data: `0x${string}`;
    /**
     * The factory that deployed this instance.
     */
    factory: ReadFactory;
  }
>;

/** {@inheritDoc ReadInstanceInfoWithMetadata} */
export type ReadWriteInstanceInfoWithMetadata = Override<
  ReadInstanceInfoWithMetadata,
  {
    /** {@inheritDoc ReadInstanceInfoWithMetadata.factory} */
    factory: ReadWriteFactory;
  }
>;
