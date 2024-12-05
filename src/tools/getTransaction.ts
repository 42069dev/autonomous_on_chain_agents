import { Hash } from 'viem';
import { createViemPublicClient } from '../viem/createViemPublicClient.js';
import { ToolConfig } from './allTools.js';

interface GetTransactionArgs {
    hash: Hash;
}

export const getTransactionTool: ToolConfig<GetTransactionArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'get_transaction',
            description: 'Get transaction details by transaction hash',
            parameters: {
                type: 'object',
                properties: {
                    hash: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{64}$',
                        description: 'The transaction hash to get details for',
                    },
                },
                required: ['hash'],
            },
        },
    },
    async handler({ hash }) {
        const client = createViemPublicClient();
        const transaction = await client.getTransaction({ hash });
        return transaction;
    },
};