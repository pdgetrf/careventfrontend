import request from '../utils/request'

export async function login() {
  return request('login', {
    method: 'post',
  })
}
