import * as CryptoJS from 'crypto-js'

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    // sayHello() => return 'Hello' 블록을 생성했을때만 사용 가능한 메서드

    static calculateBlockHash = (index: number, previousHash: string, timeStamp: number, data: string): string => CryptoJS.SHA256(index + previousHash + timeStamp + data).toString();

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

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);