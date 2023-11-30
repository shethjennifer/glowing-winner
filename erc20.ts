class ERC20Token {
    balances: Record<string, number> = {};
    totalSupply: number;

    constructor(initialSupply: number) {
        this.totalSupply = initialSupply;
        this.balances[msg.sender] = this.totalSupply;
    }

    transfer(to: string, value: number): void {
        if (this.balances[msg.sender] >= value) {
            this.balances[msg.sender] -= value;
            this.balances[to] += value;
        }
    }
}
