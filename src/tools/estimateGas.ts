import { Address, Hex } from 'viem';
import { createViemPublicClient } from '../viem/createViemPublicClient.js';
import { ToolConfig } from './allTools.js';

interface EstimateGasArgs {
    from: Address;
    to: Address;
    data?: Hex;
    value?: bigint;
}

export const estimateGasTool: ToolConfig<EstimateGasArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'estimate_gas',
            description: 'Estimate the gas needed for a transaction',
            parameters: {
                type: 'object',
                properties: {
                    from: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address the transaction is sent from',
                    },
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address the transaction is directed to',
                    },
                    data: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]*$',
                        description: 'The data sent along with the transaction',
                    },
                    value: {
                        type: 'string',
                        description: 'The value sent with the transaction in wei',
                    },
                },
                required: ['from', 'to'],
            },
        },
    },
    async handler({ from, to, data, value }) {
        const client = createViemPublicClient();
        const gasEstimate = await client.estimateGas({
            account: from,
            to,
            data,
            value: value ? BigInt(value) : undefined,
        });
        return gasEstimate;
    },
};
