export const supportedChainIds = [42069, 31337, 1, 5] as const;

export type SupportedChainId = (typeof supportedChainIds)[number];
