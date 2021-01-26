import * as CryptoJS from 'crypto-js'

class Block {
    // sayHello() => return 'Hello' 블록을 생성했을때만 사용 가능한 메서드
    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean => typeof aBlock.index === 'number' && typeof aBlock.hash === 'string' && typeof aBlock.previousHash === 'string' && typeof aBlock.timeStamp === 'number' && typeof aBlock.data === 'string'

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timeStamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}

const genesisBlock: Block = new Block(0, "224422414", '', 'Hello', 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
}

const isNewBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
}
