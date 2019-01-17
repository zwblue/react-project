import fetch from '../utils/fetch'

import {
  HOME_URL
} from '../utils/url'

export function getCheifData (data = {}) {
  return fetch({
    baseURL: HOME_URL,
    url: '/newsList',
    method: 'get',
    params: data,
  })
}
