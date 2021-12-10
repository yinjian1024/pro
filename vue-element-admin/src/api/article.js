import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function publishArticle(data) {
  return request({
    url: '/vue-element-admin/article/publish',
    method: 'post',
    data
  })
}
