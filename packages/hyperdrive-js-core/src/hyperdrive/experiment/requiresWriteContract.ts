export function requiresWriteContract(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): void {
  const originalMethod = descriptor.value;

  // Wrap the original method in a function that does the transaction
  // side-effects we want after the tx completes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptor.value = async function (...args: any[]) {
    // @ts-expect-error The `this` keyword will be the target class instance
    if (!this.writeContract) {
      throw new Error(
        `Cannot execute method "${propertyKey}". Write contract is required
          but not provided.`,
      );
    }

    // call the original function and await the hash
    return originalMethod.apply(this, args);
  };
}
