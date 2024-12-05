import { createViemPublicClient } from '../viem/createViemPublicClient.js';
import { ToolConfig } from './allTools.js';

interface GetGasPriceArgs {
    // No arguments needed
}

export const getGasPriceTool: ToolConfig<GetGasPriceArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'get_gas_price',
            description: 'Get the current gas price in wei',
            parameters: {
                type: 'object',
                properties: {},
                required: [],
            },
        },
    },
    async handler() {
        const client = createViemPublicClient();
        const gasPrice = await client.getGasPrice();
        return gasPrice;
    },
};
