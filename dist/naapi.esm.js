import e from"axios";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,n(s.key),s)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(){function e(t){s(this,e),this.request=t}return i(e,[{key:"getBalance",value:function(e){return this.request.post("/assets/api/balanceOf",{user:e})}},{key:"getTokenList",value:function(){return this.request.post("/assets/api/getTokenList")}},{key:"getAllowance",value:function(e,t,r){return this.request.post("/assets/api/allowance",{token:e,owner:t,spender:r})}},{key:"getFundingRecords",value:function(e){var t=e.page,r=e.count,n=e.type,s=e.tokenAddress,o=e.address,i=e.status;return this.request.post("/assets/api/withdraw_deposit_list",{page:t,count:r,type:n,tokenAddress:s,address:o,status:i})}},{key:"getTokenEvents",value:function(e){var t=e.type,r=e.token,n=e.eventId,s=e.address,o=e.page,i=e.count;return this.request.post("/assets/api/tokenEvents",{type:t,token:r,eventId:n,address:s,page:o,count:i})}},{key:"getHolders",value:function(e){var t=e.assetId,r=e.owner,n=e.page,s=e.count;return this.request.post("/assets/api/getHolders",{assetId:t,owner:r,page:n,count:s})}},{key:"getHolder",value:function(e,t){return this.request.post("/assets/api/getHolder",{assetId:e,owner:t})}},{key:"getHolderSummary",value:function(e){return this.request.post("/assets/api/getHolderSummary",{assetId:e})}},{key:"getPayeeList",value:function(){return this.request.post("/assets/api/getPayeeList",{})}}]),e}(),c=function(){function e(t){s(this,e),this.request=t}return i(e,[{key:"getMarketTokenList",value:function(){return this.request.post("/market/api/getTokenList")}},{key:"getMarketOrderListing",value:function(e){var t=e.page,r=e.count,n=e.token,s=e.type;return this.request.post("/market/api/orderListing",{page:t,count:r,token:n,type:s})}},{key:"getOrderHistory",value:function(e){var t=e.count,r=e.page,n=e.type,s=e.token,o=e.eventId,i=e.status,a=e.address;return this.request.post("/market/api/orderHistory",{count:t,page:r,type:n,token:s,eventId:o,status:i,address:a})}},{key:"getMarketMyOrder",value:function(e){var t=e.count,r=e.page,n=e.type,s=e.token,o=e.status,i=e.owner;return this.request.post("/market/api/myOrder",{count:t,page:r,type:n,token:s,status:o,owner:i})}},{key:"getKline",value:function(e){var t=e.tokenAddress,r=e.startDataTime,n=e.endDataTime;return this.request.post("/market/api/kline",{tokenAddress:t,startDataTime:r,endDataTime:n})}}]),e}(),p=function(){function e(t){s(this,e),this.request=t}return i(e,[{key:"getHoroscopList",value:function(e){var t=e.stakeId,r=e.staked;return this.request.post("/fairmint/getHoroscopList",{stakeId:t,staked:r})}},{key:"getActivity",value:function(){return this.request.post("/fairmint/getActivity",{})}},{key:"getUserInfo",value:function(e){var t=e.owner,r=e.stakeId;return this.request.post("/fairmint/getUserInfo",{owner:t,stakeId:r})}},{key:"getUserList",value:function(e){var t=e.stakeId,r=e.horoscopId,n=e.page,s=e.count;return this.request.post("/fairmint/getUserList",{stakeId:t,horoscopId:r,page:n,count:s})}},{key:"getRankingSummary",value:function(e){var t=e.stakeId,r=e.horoscopId;return this.request.post("/fairmint/getRankingSummary",{stakeId:t,horoscopId:r})}},{key:"getSearchRanking",value:function(e){var t=e.stakeId,r=e.horoscopId,n=e.ranking;return this.request.post("/fairmint/getSearchRanking",{stakeId:t,horoscopId:r,ranking:n})}},{key:"getBlockList",value:function(e){var t=e.stakeId,r=e.page,n=e.count,s=e.orderBy;return this.request.post("/fairmint/getBlockList",{stakeId:t,page:r,count:n,orderBy:s})}},{key:"getBlockUserList",value:function(e){var t=e.stakeId,r=e.blockId;return this.request.post("/fairmint/getBlockUserList",{stakeId:t,blockId:r})}}]),e}(),f=function(){function e(t){s(this,e),this.request=t}return i(e,[{key:"getLockList",value:function(e){var t=e.page,r=e.count;return this.request.post("/unlock/getUnlockList",{page:t,count:r})}}]),e}(),k=function(){function t(n,o,i){s(this,t),this.baseURL=n,this.headers=o||{},this.timeout=i||5e3,this.request=e.create({baseURL:this.baseURL,headers:r({"Content-Type":"application/json;charset=utf-8"},this.headers),timeout:i}),this.request.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),this.request.interceptors.response.use((function(e){return e?null==e?void 0:e.data:e}),(function(e){return Promise.reject(e)}))}return i(t,[{key:"asset",get:function(){return new u(this.request)}},{key:"market",get:function(){return new c(this.request)}},{key:"fairmint",get:function(){return new p(this.request)}},{key:"lock",get:function(){return new f(this.request)}}]),t}();export{k as default};
