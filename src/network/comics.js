import {request} from "./request";

export function getComicsMultidata() {
  return request({
    url: '/comics'
  })
}

export function getComicsShowMultidata(id) {
  return request({
    url: '/comics/comicsshow',
    params: {
      id
    }
  })
}