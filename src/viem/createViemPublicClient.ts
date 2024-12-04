import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

export function createViemPublicClient() {
    return createPublicClient({
        chain: base,
        transport: http(),
    });
}
