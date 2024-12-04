# Onchain Agent

An AI-powered blockchain agent that can interact with any evm chain. Built with OpenAI's Assistant API and viem.

## Features

- AI Assistant powered by [OpenAI's Assistant API](https://platform.openai.com/docs/assistants/overview) with custom personality
- Direct blockchain interactions through [Viem](https://viem.sh/)
- Support for:
  - ERC20 token deployments and interactions
  - Contract reading and writing
  - Balance checking
  - Transaction management
  - Uniswap V3 pool creation

## Prerequisites

- Node.js (v18 or higher)
- TypeScript
- An OpenAI API key
- A wallet private key for the agent

## Getting Started

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository:

```bash
git clone https://github.com/42069dev/autonomous_on_chain_agents.git

cd autonomous_on_chain_agents
```

2. Install dependencies:

```bash
npm install
```

3. Copy the example environment file and fill in your API keys:

```bash
cp .env.example .env
```

Then open the .env file and replace the placeholder values with your actual keys.

4. Run the agent:

```bash
npm start
```
