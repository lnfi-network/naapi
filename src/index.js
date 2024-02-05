import axios from 'axios'
import Assets from './modules/assets.js'
import Market from './modules/market.js'
import FairMint from './modules/fairMint.js'
import Lock from './modules/lock.js'
class NAAPI {
  constructor (baseURL, headers, timeout) {
    this.baseURL = baseURL
    this.headers = headers || {}
    this.timeout = timeout || 5000
    this.request = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...this.headers
      },
      timeout
    })

    this.request.interceptors.request.use(config => { return config }, error => { return Promise.reject(error) })
    this.request.interceptors.response.use(response => {
      if (response) {
        return response?.data
      }
      return response
    }, error => { return Promise.reject(error) })
  }

  get asset () {
    return new Assets(this.request)
  }

  get market () {
    return new Market(this.request)
  }

  get fairmint () {
    return new FairMint(this.request)
  }

  get lock () {
    return new Lock(this.request)
  }
}
export default NAAPI
