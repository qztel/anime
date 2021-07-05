import {request} from "./request";

export function getVideoMultidata() {
  return request({
    url: '/video',
  })
}

export function getVideoShow(id,videoclass) {
  return request({
    url: '/video/videoshow',
    params: {
      id,
      videoclass
    }
  })
}

// export function getVideoComment(videoclass) {
//   return request({
//     url: '/video/videoshow',
//     params: {
//       videoclass
//     }
//   })
// }