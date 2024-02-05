/**
 * Represents an Assets class.
 * @class
 */
class Assets {
  constructor (request) {
    this.request = request
  }

  /**
     * Retrieves the balance of a user.
     * @param {string} user - The user's identifier.
     * @returns {Promise} A promise that resolves with the balance.
     */
  getBalance (user) {
    return this.request.post('/assets/api/balanceOf', { user })
  }

  /**
     * Retrieves the list of tokens.
     * @returns {Promise} A promise that resolves with the token list.
     */
  getTokenList () {
    return this.request.post('/assets/api/getTokenList')
  }

  /**
     * Retrieves the allowance of a token.
     * @param {string} token - The token's identifier.
     * @param {string} owner - The owner's identifier.
     * @param {string} spender - The spender's identifier.
     * @returns {Promise} A promise that resolves with the allowance.
     */
  getAllowance (token, owner, spender) {
    return this.request.post('/assets/api/allowance', { token, owner, spender })
  }

  /**
     *
     * Retrieves the funding records.
     * @param {Object} options - The options for retrieving funding records.
     * @param {number} options.page - The page number.
     * @param {number} options.count - The number of records per page.
     * @param {RECORD_TYPE} options.type - The type of records.
     * @param {string} options.tokenAddress - The token's address.
     * @param {string} options.address - The user's address.
     * @param {string} options.status - The status of records.
     * @returns {Promise} A promise that resolves with the funding records.
     */
  getFundingRecords ({ page, count, type, tokenAddress, address, status }) {
    return this.request.post('/assets/api/withdraw_deposit_list', { page, count, type, tokenAddress, address, status })
  }

  /**
     * Retrieves the token events.
     * @param {Object} options - The options for retrieving token events.
     * @param {string} options.type - The type of events.(approve, transfer)
     * @param {string} options.token - The token's identifier.
     * @param {string} options.eventId - The event's identifier.
     * @param {string} options.address - The user's address.
     * @param {number} options.page - The page number.
     * @param {number} options.count - The number of records per page.
     * @returns {Promise} A promise that resolves with the token events.
     */
  getTokenEvents ({ type, token, eventId, address, page, count }) {
    return this.request.post('/assets/api/tokenEvents', { type, token, eventId, address, page, count })
  }

  /**
     * Retrieves the holders of an asset.
     * @param {Object} options - The options for retrieving holders.
     * @param {string} options.assetId - The asset's identifier.
     * @param {string} options.owner - The owner's identifier.
     * @param {number} options.page - The page number.
     * @param {number} options.count - The number of records per page.
     * @returns {Promise} A promise that resolves with the holders.
     */
  getHolders ({ assetId, owner, page, count }) {
    return this.request.post('/assets/api/getHolders', { assetId, owner, page, count })
  }

  /**
     * Retrieves the holder of an asset.
     * @param {string} assetId - The asset's identifier.
     * @param {string} owner - The owner's identifier.
     * @returns {Promise} A promise that resolves with the holder.
     */
  getHolder (assetId, owner) {
    return this.request.post('/assets/api/getHolder', { assetId, owner })
  }

  /**
     * Retrieves the holder summary of an asset.
     * @param {string} assetId - The asset's identifier.
     * @returns {Promise} A promise that resolves with the holder summary.
     */
  getHolderSummary (assetId) {
    return this.request.post('/assets/api/getHolderSummary', { assetId })
  }

  /**
     * Retrieves the payee list.
     * @returns {Promise} A promise that resolves with the payee list.
     */
  getPayeeList () {
    return this.request.post('/assets/api/getPayeeList', {})
  }
}
export default Assets
