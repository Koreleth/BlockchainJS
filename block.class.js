class Block {
    constructor(time = Date.now(), data = {coinTable:'', transactions: []}) {
        this.time = time;
        this.data = data;
        this.lastHash = '';
        this.nonce = 0;
        this.difficulty = '00';
        this.kill = false;
    }
    createHash() {
        return sha256(this.nonce + this.lastHash + this.time + JSON.stringify(this.data));
    }

    mine() { 
        let rewarding = false;
        //this.data.coinTable = blockchain.getLastBlock() ? blockchain.getLastBlock().data.coinTable : coinTable; 
        //let pendingTransactions = this.pendingTransactions();
        this.lastHash = blockchain.getLastBlock().createHash();
        this.resolveTransaction();
        let hash = this.createHash();
        return new Promise((resolve, reject) => {
            let i = setInterval(() => {
                if (this.kill) {
                    clearInterval(i);
                    reject();
                } else if (hash.startsWith(this.difficulty)) { //00.....fdcsdsd
                    console.log('Block mined', hash);
                    clearInterval(i);
                    //this.getReward();
                    //this.resolveTransaction(); // Problem:  hash ändert sich da Daten hinzugefügt werden
                    resolve();
                } else {
                    this.nonce++;
                    hash = this.createHash();
                }
            }, 1000 / 30);
        });
    }

    resolveTransaction() {
        let transactions = this.data.transactions;
        transactions.forEach(transaction => {
            this.addCoin(transaction.from, transaction.to, transaction.amount);
        });
    }

    addCoin(sender, receiver, amount) {
        let coinTable = JSON.parse(JSON.stringify(this.data.coinTable || [])); //Fixed Problem. Aufgrund Referenzdatentypen
        let entry = coinTable.find(e => e.name == receiver);
        if (!entry) {
            entry = {name: receiver, amount: 0}; //Nutzer in Tabelle eintragen falls nicht vorhanden
            coinTable.push(entry);
        }

        if (sender != 'Reward') {
            let entrySender = coinTable.find(e => e.name == sender);
            if (!entrySender) {
                entrySender = { name: receiver, amount: 0 };
                coinTable.push(entrySender);
            }
            entrySender.amount -= amount;
        }

        //trägt neue Daten in die Tabelle ein
        entry.amount += amount;
        this.data.coinTable = coinTable;
        
    }
    


    

    mineOld(){
        this.hash = this.createHash();
        while(!this.hash.startsWith(this.difficulty)){
            this.nonce++;
            hash = this.createHash();
        }
        return this.hash;
    }
}
