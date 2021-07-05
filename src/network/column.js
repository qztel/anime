import {request} from "./request";

export function getColumnMultidata() {
  return request({
    url: '/column'
  })
}

export function getColumnLikeMultidata(id) {
  return request({
    url: '/column',
    params: {
      id
    }
  })
}

export function getColumnShowMultidata(id,username) {
  return request({
    url: '/column/columnshow',
    params: {
      id,
      username
    }
  })
}
