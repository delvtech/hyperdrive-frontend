export const supportedChainIds = [42069, 31337] as const;

export type SupportedChainId = typeof supportedChainIds[number];
