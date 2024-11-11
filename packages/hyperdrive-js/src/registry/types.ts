import { FunctionReturn, ReplaceProps } from "@delvtech/drift";
import { ReadFactory } from "src/factory/ReadFactory";
import { ReadWriteFactory } from "src/factory/ReadWriteFactory";
import { RegistryAbi } from "src/registry/abi";

/**
 * The info collected for each Hyperdrive factory along with the metadata
 * associated with each instance.
 */
export type FactoryInfoWithMetadata = FunctionReturn<
  RegistryAbi,
  "getFactoryInfoWithMetadata"
>;

/**
 * The info related to each Hyperdrive instance along with the metadata
 * associated with each instance.
 */
export type ReadInstanceInfoWithMetadata = ReplaceProps<
  FunctionReturn<RegistryAbi, "getInstanceInfoWithMetadata">,
  {
    /**
     * The factory that deployed this instance.
     */
    factory: ReadFactory;
  }
>;

/** {@inheritDoc ReadInstanceInfoWithMetadata} */
export type ReadWriteInstanceInfoWithMetadata = ReplaceProps<
  ReadInstanceInfoWithMetadata,
  {
    /** {@inheritDoc ReadInstanceInfoWithMetadata.factory} */
    factory: ReadWriteFactory;
  }
>;
