class Blockchain{
    
    constructor() {
        //TODO: Read Chain from file
            this.chain = []; 
    }
    

    async addBlock (block, nodeID) {
        let lb = this.getLastBlock();
        block.data.coinTable = lb.data.coinTable ? lb.data.coinTable : [];
        try{
        await block.mine();
        console.log('Last Hash' , block.lastHash);
        updateGraphData(block.data.coinTable);
        console.log('UPDATED TABLE', block.data.coinTable);
        broadcaster.notify(nodeID);
        this.chain.push(Object.freeze(block)); //freeze the block to prevent further changes
        log(`Node ${nodeID} mined a new block (${this.chain.length - 1} Blocks insgesammt)`);
        } catch(e) {

        }
    }

    isValid() {
        
        let notFound = true;

        if (this.chain.length <= 1) return notFound; // A chain with 0 or 1 block is always valid
        
        let currentBlock;
        let prevBlock;
        

        for (let i = 1; notFound && i < this.chain.length; i++) {
            currentBlock = this.chain[i];
            prevBlock = this.chain[i - 1];
 
            if (prevBlock.createHash() != currentBlock.lastHash) {
                console.log(''+ prevBlock.createHash() + ' != ' +  currentBlock.lastHash )
                notFound = false;
            }
        }

        return notFound;

} 

    getLastBlock() {
        return this.chain.length > 0 ? this.chain[this.chain.length - 1] : new Block(0,{});
    }

    getBlock(index) {
        return this.chain[index];
    }
}
let blockchain = new Blockchain();
