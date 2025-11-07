import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type TonNFTConfig = {};

export function tonNFTConfigToCell(config: TonNFTConfig): Cell {
    return beginCell().endCell();
}

export class TonNFT implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new TonNFT(address);
    }

    static createFromConfig(config: TonNFTConfig, code: Cell, workchain = 0) {
        const data = tonNFTConfigToCell(config);
        const init = { code, data };
        return new TonNFT(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
