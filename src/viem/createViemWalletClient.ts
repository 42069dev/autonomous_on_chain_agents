import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

export function createViemWalletClient() {
    if (!process.env.PRIVATE_KEY) {
        throw new Error("⛔ PRIVATE_KEY environment variable is not set.");
    }

    const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

    return createWalletClient({
        account,
        chain: base,
        transport: http(),
    });
}