import {
  Adapter,
  FunctionReturn,
  ReadWriteAdapter,
  Replace,
} from "@delvtech/drift";
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
export type ReadInstanceInfoWithMetadata<A extends Adapter = Adapter> = Replace<
  FunctionReturn<RegistryAbi, "getInstanceInfoWithMetadata">,
  {
    /**
     * The factory that deployed this instance.
     */
    factory: ReadFactory<A>;
  }
>;

/** {@inheritDoc ReadInstanceInfoWithMetadata} */
export type ReadWriteInstanceInfoWithMetadata<
  A extends ReadWriteAdapter = ReadWriteAdapter,
> = Replace<
  ReadInstanceInfoWithMetadata<A>,
  {
    /** {@inheritDoc ReadInstanceInfoWithMetadata.factory} */
    factory: ReadWriteFactory<A>;
  }
>;
