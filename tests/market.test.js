const NAAPI = require('../dist/naapi.cjs.js');

describe('MARKET', () => {
    let naapi
    const owner = 'npub1zptcf2v9ms5dgd8mgulsckk04l9upr3lnerk6ckh9zyntzu0ness753zx8'
    const encodeOwner = '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
    beforeEach(() => {
        naapi = new NAAPI('https://market-api.unift.xyz') // dev:https://market-api.unift.xyz | prod:https://market-api.nostrassets.com
    })
    it('getMarketTokenList', async () => {
        const res = await naapi.market.getMarketTokenList()
        expect(res.code).toBe(0)
    })
    /* 
        token: NOSTR|TRICK|TREAT|TNA
        type:  BUY|SELL
    */
    it('getMarketOrderListing', async () => {
        const res = await naapi.market.getMarketOrderListing({ page: 1, count: 10,token:'NOSTR',type:'SELL' })
        expect(res.code).toBe(0)
    })
    /* 
        token: NOSTR|TRICK|TREAT|TNA
        type:  'buy'|'sell'
        status: 'open'|'history'|''
        address: '85da25d5bba5d9ef44d6f89978b73ee90ff07f99c14386be0d59dfc7fe0626df' (encode address)
    */
    it('getOrderHistory', async () => {
        const res = await naapi.market.getOrderHistory({  page:1, count:20,type:'', token:'', eventId:'', status:'', address:'' })
        expect(res.code).toBe(0)
    })
    /* 
        token: NOSTR|TRICK|TREAT|TNA
        type:  'buy'|'sell'
        status: 'open'|'history'|'all'
    */
    it('getMarketMyOrder', async () => {
        const res = await naapi.market.getMarketMyOrder({ page:1, count:20,type:'', token:'', status:'all', owner:encodeOwner })
        expect(res.code).toBe(0)
    })
  
    //getKline
    it('getKline', async () => {
        const res = await naapi.market.getKline({ tokenAddress:'6605a7014c89cc397308111273cfa67154cd74402f9bfa14f0c2aa7f43dd34ab', startDataTime:'2024-01-30 08:45:19', endDataTime:'2024-01-31 08:45:19' })
        expect(res.code).toBe(0)
    })
})
