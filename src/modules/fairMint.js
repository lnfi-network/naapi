/**
 * Represents a FairMint object.
 * @class
 */
class FairMint {
  constructor (request) {
    this.request = request
  }

  /**
   * Retrieves the stake horoscope list.
   * @param {Object} params - The parameters for retrieving the stake horoscope list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {boolean} params.staked - Indicates if the stake is staked.
   * @returns {Promise} The promise object representing the stake horoscope list.
   */
  getStakeHoroscopList ({ stakeId, staked }) {
    return this.request.post('/stake/getStakeHoroscopList', { stakeId, staked })
  }

  /**
   * Retrieves the stake activity.
   * @returns {Promise} The promise object representing the stake activity.
   */
  getStakeActivity () {
    return this.request.post('/stake/getStakeActivity', {})
  }

  /**
   * Retrieves the user stake information.
   * @param {Object} params - The parameters for retrieving the user stake information.
   * @param {string} params.owner - The owner of the stake.
   * @param {string} params.stakeId - The ID of the stake.
   * @returns {Promise} The promise object representing the user stake information.
   */
  getUserStakeInfo ({ owner, stakeId }) {
    return this.request.post('/stake/getStakeUser', { owner, stakeId })
  }

  /**
   * Retrieves the stake user list.
   * @param {Object} params - The parameters for retrieving the stake user list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.horoscopId - The ID of the horoscope.
   * @param {number} params.page - The page number.
   * @param {number} params.count - The number of items per page.
   * @returns {Promise} The promise object representing the stake user list.
   */
  getStakeUserList ({ stakeId, horoscopId, page, count }) {
    return this.request.post('/stake/getStakeUserList', { stakeId, horoscopId, page, count })
  }

  /**
   * Retrieves the ranking summary.
   * @param {Object} params - The parameters for retrieving the ranking summary.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.horoscopId - The ID of the horoscope.
   * @returns {Promise} The promise object representing the ranking summary.
   */
  getRankingSummary ({ stakeId, horoscopId }) {
    return this.request.post('/stake/getRankingSummary', { stakeId, horoscopId })
  }

  /**
   * Retrieves the search ranking.
   * @param {Object} params - The parameters for retrieving the search ranking.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.horoscopId - The ID of the horoscope.
   * @param {string} params.ranking - The ranking value.
   * @returns {Promise} The promise object representing the search ranking.
   */
  getSearchRanking ({ stakeId, horoscopId, ranking }) {
    return this.request.post('/stake/getSearchRanking', { stakeId, horoscopId, ranking })
  }

  /**
   * Retrieves the block list.
   * @param {Object} params - The parameters for retrieving the block list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {number} params.page - The page number.
   * @param {number} params.count - The number of items per page.
   * @param {string} params.orderBy - The order by field.
   * @returns {Promise} The promise object representing the block list.
   */
  getBlockList ({ stakeId, page, count, orderBy }) {
    return this.request.post('/stake/getBlockList', { stakeId, page, count, orderBy })
  }

  /**
   * Retrieves the block stake user list.
   * @param {Object} params - The parameters for retrieving the block stake user list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.blockId - The ID of the block.
   * @returns {Promise} The promise object representing the block stake user list.
   */
  getBlockStakeUserList ({ stakeId, blockId }) {
    return this.request.post('/stake/getBlockStakeUserList', { stakeId, blockId })
  }
}
export default FairMint
