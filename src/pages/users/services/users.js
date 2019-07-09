import request from '@/utils/request'
// import { PAGE_SIZE } from  '../constants'

// 查询用户列表
export function fetch ({ page=1 }) {
  return request(`/api/users`)
}

// 创建用户
export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values)
  })
}


// 编辑用户
export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE'
  })
}
