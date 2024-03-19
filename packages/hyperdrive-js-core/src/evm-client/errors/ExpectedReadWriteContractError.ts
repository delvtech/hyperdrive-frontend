export class ExpectedWriteContractError extends Error {
  constructor(address: `0x${string}`) {
    super(
      `Expected a CachedReadWriteContract instance for address ${address}, but got a CachedReadContract instance instead.`,
    );
    this.name = "ExpectedReadWriteContract";
  }
}
