/**
 * Represents a Market object.
 * @class
 */
class Market {
  constructor (request) {
    this.request = request
  }

  /**
     * Retrieves the token list from the market API.
     * @returns {Promise} A promise that resolves with the token list.
     */
  getMarketTokenList () {
    return this.request.post('/market/api/getTokenList')
  }

  /**
     * Retrieves the order listing from the market API.
     * @param {Object} options - The options for the order listing.
     * @param {number} options.page - The page number.
     * @param {number} options.count - The number of orders per page.
     * @param {string} options.token - The token address.
     * @param {string} options.type - The order type.
     * @returns {Promise} A promise that resolves with the order listing.
     */
  getMarketOrderListing ({ page, count, token, type }) {
    return this.request.post('/market/api/orderListing', { page, count, token, type })
  }

  /**
     * Retrieves the order history from the market API.
     * @param {Object} options - The options for the order history.
     * @param {number} options.count - The number of orders per page.
     * @param {number} options.page - The page number.
     * @param {string} options.type - The order type.
     * @param {string} options.token - The token address.
     * @param {string} options.eventId - The event ID.
     * @param {string} options.status - The order status.
     * @param {string} options.address - The user address.
     * @returns {Promise} A promise that resolves with the order history.
     */
  getOrderHistory ({ count, page, type, token, eventId, status, address }) {
    return this.request.post('/market/api/orderHistory', { count, page, type, token, eventId, status, address })
  }

  /**
     * Retrieves the user's orders from the market API.
     * @param {Object} options - The options for the user's orders.
     * @param {number} options.count - The number of orders per page.
     * @param {number} options.page - The page number.
     * @param {string} options.type - The order type.
     * @param {string} options.token - The token address.
     * @param {string} options.status - The order status.
     * @param {string} options.owner - The owner address.
     * @returns {Promise} A promise that resolves with the user's orders.
     */
  getMarketMyOrder ({ count, page, type, token, status, owner }) {
    return this.request.post('/market/api/myOrder', { count, page, type, token, status, owner })
  }

  /**
     * Retrieves the Kline data from the market API.
     * @param {Object} options - The options for the Kline data.
     * @param {string} options.tokenAddress - The token address.
     * @param {string} options.startDataTime - The start date and time.
     * @param {string} options.endDataTime - The end date and time.
     * @returns {Promise} A promise that resolves with the Kline data.
     */
  getKline ({ tokenAddress, startDataTime, endDataTime }) {
    return this.request.post('/market/api/kline', { tokenAddress, startDataTime, endDataTime })
  }
}
export default Market
