import { Address } from 'viem';
import { createViemPublicClient } from '../viem/createViemPublicClient.js';
import { ToolConfig } from './allTools.js';

interface GetTransactionCountArgs {
    address: Address;
}

export const getTransactionCountTool: ToolConfig<GetTransactionCountArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'get_transaction_count',
            description: 'Get the number of transactions sent from an address (nonce)',
            parameters: {
                type: 'object',
                properties: {
                    address: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address to get the transaction count for',
                    },
                },
                required: ['address'],
            },
        },
    },
    async handler({ address }) {
        const client = createViemPublicClient();
        const count = await client.getTransactionCount({ address });
        return count;
    },
};