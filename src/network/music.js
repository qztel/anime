import {request} from "./request";

export function getMusicMultidata() {
  return request({
    url: '/music',
  })
}

export function getMusicShow(musicclass) {
  return request({
    url: '/music/musicshow',
    params: {
      musicclass
    }
  })
}

export function postMusicShow(id) {
  return request({
    url: '/music/musicshow',
    params: {
      id
    }
  })
}