import {request} from "./request";

export function getLoginMultidata() {
  return request({
    url: '/login',
    methods: 'post'
  })
}

export function ZhuCe(data) {
  return request({
    url: '/registered',
    methods: 'get',
    params: {
      data
    }
  })
}