/**
 * Represents a FairMint object.
 * @class
 */
class FairMint {
  constructor (request) {
    this.request = request
  }

  /**
   * Retrieves the horoscope list.
   * @param {Object} params - The parameters for retrieving the stake horoscope list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {boolean} params.staked - Indicates if the stake is staked.
   * @returns {Promise} The promise object representing the stake horoscope list.
   */
  getHoroscopList ({ stakeId, staked }) {
    return this.request.post('/fairmint/getHoroscopList', { stakeId, staked })
  }

  /**
   * Retrieves the activity.
   * @returns {Promise} The promise object representing the stake activity.
   */
  getActivity () {
    return this.request.post('/fairmint/getActivity', {})
  }

  /**
   * Retrieves the user information.
   * @param {Object} params - The parameters for retrieving the user information.
   * @param {string} params.owner - The owner.
   * @param {string} params.stakeId - The ID.
   * @returns {Promise} The promise object representing the user information.
   */
  getUserInfo ({ owner, stakeId }) {
    return this.request.post('/fairmint/getUserInfo', { owner, stakeId })
  }

  /**
   * Retrieves the user list.
   * @param {Object} params - The parameters for retrieving the user list.
   * @param {string} params.stakeId - The ID of the.
   * @param {string} params.horoscopId - The ID of the horoscope.
   * @param {number} params.page - The page number.
   * @param {number} params.count - The number of items per page.
   * @returns {Promise} The promise object representing the user list.
   */
  getUserList ({ stakeId, horoscopId, page, count }) {
    return this.request.post('/fairmint/getUserList', { stakeId, horoscopId, page, count })
  }

  /**
   * Retrieves the ranking summary.
   * @param {Object} params - The parameters for retrieving the ranking summary.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.horoscopId - The ID of the horoscope.
   * @returns {Promise} The promise object representing the ranking summary.
   */
  getRankingSummary ({ stakeId, horoscopId }) {
    return this.request.post('/fairmint/getRankingSummary', { stakeId, horoscopId })
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
    return this.request.post('/fairmint/getSearchRanking', { stakeId, horoscopId, ranking })
  }

  /**
   * Retrieves the block list.
   * @param {Object} params - The parameters for retrieving the block list.
   * @param {string} params.stakeId - The ID of the block.
   * @param {number} params.page - The page number.
   * @param {number} params.count - The number of items per page.
   * @param {string} params.orderBy - The order by field.
   * @returns {Promise} The promise object representing the block list.
   */
  getBlockList ({ stakeId, page, count, orderBy }) {
    return this.request.post('/fairmint/getBlockList', { stakeId, page, count, orderBy })
  }

  /**
   * Retrieves the block stake user list.
   * @param {Object} params - The parameters for retrieving the block user list.
   * @param {string} params.stakeId - The ID of the stake.
   * @param {string} params.blockId - The ID of the block.
   * @returns {Promise} The promise object representing the block stake user list.
   */
  getBlockUserList ({ stakeId, blockId }) {
    return this.request.post('/fairmint/getBlockUserList', { stakeId, blockId })
  }
}
export default FairMint
