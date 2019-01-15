import fetch from '../utils/fetch'

import {
  HOME_URL
} from '../utils/url'

export function getIconApi (data = {}) {
  return fetch({
    baseURL: HOME_URL,
    url: '/iconPictures',
    method: 'GET',
    params: data,
  })
}

export function getHomeApi (data = {}) {
  return fetch({
    baseURL: HOME_URL,
    url: '/frontPage',
    params: data,
  })
}
