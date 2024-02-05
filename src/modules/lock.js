/**
 * Represents a Lock object.
 * @class
 */
class Lock {
  constructor (request) {
    this.request = request
  }

  /**
     * Retrieves a list of locks.
     * @param {Object} options - The options for retrieving the lock list.
     * @param {number} options.page - The page number.
     * @param {number} options.count - The number of locks per page.
     * @returns {Promise} A promise that resolves with the lock list.
     */
  getLockList ({ page, count }) {
    return this.request.post('/unlock/getUnlockList', { page, count })
  }
}
export default Lock
