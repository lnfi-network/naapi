# NAAPI
It is an SDK library developed based on the NOSTR ASSET protocol, used to query transactions、balance、tokenEvents.

## Support method list

### NAAPI.assets
1. getBalance
2. getTokenList
3. getAllowance
4. getFundingRecords
5. getTokenEvents
6. getHolders
7. getHolder
8. getHolderSummary
9. getPayeeList
### NAAPI.markets
1. getMarketTokenList
2. getMarketOrderListing
3. getOrderHistory
4. getMarketMyOrder
5. return
### NAAPI.fairmint
1. getHoroscopList
2. getActivity
3. getUserInfo
4. getUserList
5. getRankingSummary
6. getSearchRanking
7. getBlockList
8. getBlockUserList
### NAAPI.lock
1. getLockList


## Setup
### React
#### install
```
yarn add naapi

```
#### code
```
import {useCallback} from 'react
import NAAPI from 'naapi'
const naapi = new NAAPI('https://market-api.nostrassets.com') // dev:
https://market-api.unift.xyz,prod:https://market-api.nostrassets.com
const onQueryBalance = useCallback(async()=>{
    const res = await naapi.assets.getBalance(owner)
},[])
return <>
{your code}
</>


```
## More Example
tests/*.test.js

## License
MIT License

Copyright (c) 2024 Luke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.