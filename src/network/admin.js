import {request} from "./request";

export function adminUser() {
  return request({
    url: '/adminuser'
  })
}

export function adminComment() {
  return request({
    url: '/admincomment'
  })
}

export function adminColumn() {
  return request({
    url: '/admincolumn'
  })
}