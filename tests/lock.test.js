const NAAPI = require('../dist/naapi.cjs.js');

describe('LOCK', () => {
    let naapi
    
    beforeEach(() => {
        naapi = new NAAPI('https://market-api.nostrassets.com')
    })
    it('getLockList', async () => {
        const res = await naapi.lock.getLockList({page:1,count:10})
        expect(res.code).toBe(0)
    })
})
