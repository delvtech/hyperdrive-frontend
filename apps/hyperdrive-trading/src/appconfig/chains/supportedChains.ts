export const supportedChainIds = [5, 31337] as const;
export type SupportedChainId = (typeof supportedChainIds)[number];
