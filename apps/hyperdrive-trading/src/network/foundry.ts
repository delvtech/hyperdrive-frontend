import { http } from "viem";
const { VITE_LOCALHOST_NODE_RPC_URL } = import.meta.env;

export const foundryTransport = http(VITE_LOCALHOST_NODE_RPC_URL);
