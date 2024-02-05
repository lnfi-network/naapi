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
        expect(res.code).toBe(0)
    })
    it('getTokenList', async () => {
        const res = await naapi.asset.getTokenList()
        expect(res.code).toBe(0)
    })
    it('getAllowance', async () => {
        const res = await naapi.asset.getAllowance("SATS", owner, "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw")
        expect(res.code).toBe(0)
    })
    it('getFundingRecords', async () => {
        /* 
            type: 'deposit' | 'withdraw'
            status: -1(all) | 9(success) | 99(Faied)
            tokenAddress: '0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d' (encodeAddress)
        */
        const res = await naapi.asset.getFundingRecords({ page: 1, count: 10, type: 'deposit', tokenAddress: '0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d', address: encodeOwner, status: -1 })
        expect(res.code).toBe(0)
    })
    it('getTokenEvents', async () => {
        /* 
            type: 'approve' | 'transfer'|'transferFrom'|'openPro'|'closePro'|'deleteAddressBook'|'addressBookAdd'
            token: ''|'SATS'|'TREAT'|'TRICK'|'NOSTR'|'TNA'
            address: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
        */
        const res = await naapi.asset.getTokenEvents({ type: '', token: '',eventId:'', address: '', page: 1, count: 10 })
        expect(res.code).toBe(0)
    })
    /* 
        assetId:'0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d'
        owner: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
        page: 1
        count: 10
    */
    it('getHolders', async () => {
        const res = await naapi.asset.getHolders({ assetId: '0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d', owner: encodeOwner, page: 1, count: 10 })
        expect(res.code).toBe(0)
    })
    /* 
        assetId:'0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d'
        owner: '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
    */
    it('getHolder', async () => {
        const res = await naapi.asset.getHolder('0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d', encodeOwner)
        expect(res.code).toBe(0)
    })
    /* 
        assetId:'0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d'
     */
    it('getHolderSummary', async () => {
        const res = await naapi.asset.getHolderSummary('0f8b9bb57522a824746b2ce364ae606ad433bc36db66ab86756e0e156a1ed34d')
        expect(res.code).toBe(0)
    })
    //getPayeeList
    it('getPayeeList', async () => {
        const res = await naapi.asset.getPayeeList()
        expect(res.code).toBe(0)
    })
})
