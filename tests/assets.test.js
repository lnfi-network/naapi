const NAAPI = require('../dist/naapi.cjs.js');

describe('ASSETS', () => {
    let naapi
    const owner = 'npub1zptcf2v9ms5dgd8mgulsckk04l9upr3lnerk6ckh9zyntzu0ness753zx8'
    const encodeOwner = '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
    beforeEach(() => {
        naapi = new NAAPI('https://market-api.nostrassets.com') // dev:https://market-api.unift.xyz | prod:https://market-api.nostrassets.com
    })
    it('getBalance', async () => {
        const res = await naapi.asset.getBalance(owner)
        expect([0,500]).toContain(res.code)
    })
    it('getTokenList', async () => {
        const res = await naapi.asset.getTokenList()
        expect([0,500]).toContain(res.code)
    })
    it('getAllowance', async () => {
        const res = await naapi.asset.getAllowance("SATS", owner, "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw")
        expect([0,500]).toContain(res.code)
    })
    it('getFundingRecords', async () => {
        /* 
            type: 'deposit' | 'withdraw'
            status: -1(all) | 9(success) | 99(Faied)
            tokenAddress: '0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d' (encodeAddress)
        */
        const res = await naapi.asset.getFundingRecords({ page: 1, count: 10, type: 'deposit', tokenAddress: '0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d', address: encodeOwner, status: -1 })
        expect([0,500]).toContain(res.code)
    })
    it('getTokenEvents', async () => {
        /* 
            type: 'approve' | 'transfer'|'transferFrom'|'openPro'|'closePro'|'deleteAddressBook'|'addressBookAdd'
            token: ''|'SATS'|'TREAT'|'TRICK'|'NOSTR'|'TNA'
            address: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
        */
        const res = await naapi.asset.getTokenEvents({ type: '', token: '',eventId:'', address: '', page: 1, count: 10 })
        expect([0,500]).toContain(res.code)
    })
    /* 
        assetId:'f69ffad9c19f6f1d74f791d11a19e1b38deac68da5159fcb66589312214be912'
        owner: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
        page: 1
        count: 10
    */
    it('getHolders', async () => {
        const res = await naapi.asset.getHolders({ assetId: 'f69ffad9c19f6f1d74f791d11a19e1b38deac68da5159fcb66589312214be912', owner: '', page: 1, count: 10 })
        expect([0,500]).toContain(res.code)
    })
    /* 
        assetId:'f69ffad9c19f6f1d74f791d11a19e1b38deac68da5159fcb66589312214be912'
        owner: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
    */
    it('getHolder', async () => {
        const res = await naapi.asset.getHolder('f69ffad9c19f6f1d74f791d11a19e1b38deac68da5159fcb66589312214be912', 'cc6638845ecb7f7a0e99c59d44c5c1ea115985af17597ce4ab6cc240df15aade')
        expect([0,500]).toContain(res.code)
    })
    /* 
        assetId:'0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d'
     */
    it('getHolderSummary', async () => {
        const res = await naapi.asset.getHolderSummary('0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d')
        expect([0,500]).toContain(res.code)
    })
    //getPayeeList
    it('getPayeeList', async () => {
        const res = await naapi.asset.getPayeeList()
        expect([0,500]).toContain(res.code)
    })
})
