import { FunctionReturn } from "@delvtech/evm-client";
import { Overwrite } from "src/base/types";
import { ReadFactory } from "src/factory/ReadFactory";
import { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import { RegistryAbi } from "src/registry/abi";

/**
 * The info collected for each Hyperdrive factory along with the metadata
 * associated with each instance.
 */
export type FactoryInfoWithMetadata = Overwrite<
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
export type ReadInstanceInfoWithMetadata = Overwrite<
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
export type ReadWriteInstanceInfoWithMetadata = Overwrite<
  ReadInstanceInfoWithMetadata,
  {
    /** {@inheritDoc ReadInstanceInfoWithMetadata.factory} */
    factory: ReadWriteFactory;
  }
>;
