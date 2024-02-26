const NAAPI = require('../dist/naapi.cjs.js');

describe('FAIRMINT', () => {
    let naapi
    const owner = 'npub1qxv7fg6npraas9h406954yv728rhr2nsv98kp3zwu4pcynazngasnwg0qc'
    const encodeOwner = '105784a985dc28d434fb473f0c5acfafcbc08e3f9e476d62d72889358b8f9e61'
    beforeEach(() => {
        naapi = new NAAPI('https://market-api.unift.xyz') // dev:https://market-api.unift.xyz | prod:https://market-api.nostrassets.com
    })
    it('getActivity', async () => {
        const res = await naapi.fairmint.getActivity()
        expect(res.code).toBe(0)
    })
    // getHoroscopList
    it('getHoroscopList', async () => {
        const res = await naapi.fairmint.getHoroscopList({ stakeId:1, staked:false })
        expect(res.code).toBe(0)
    })
    //getUserInfo
    it('getUserInfo', async () => {
        const res = await naapi.fairmint.getUserInfo({ owner:encodeOwner, stakeId:1 })
        expect(res.code).toBe(0)
    })
    //getUserList
    it('getUserList', async () => {
        const res = await naapi.fairmint.getUserList({ stakeId:1, horoscopId:8, page:1, count:10 })
        expect(res.code).toBe(0)
    })
    //getRankingSummary
    it('getRankingSummary', async () => {
        const res = await naapi.fairmint.getRankingSummary({ stakeId:1, horoscopId:8,ranking:100 })
        expect(res.code).toBe(0)
    })
    //getBlockList
    /* 
    orderBy:1: asc 2:desc
    */
    it('getBlockList', async () => {
        const res = await naapi.fairmint.getBlockList({ stakeId:1, orderBy:1, page:1, count:10 })
        expect(res.code).toBe(0)
    })
    //getBlockUserList
    it('getBlockUserList', async () => {
        const res = await naapi.fairmint.getBlockUserList({ stakeId:1, blockId:2 })
        expect(res.code).toBe(0)
    })
})
