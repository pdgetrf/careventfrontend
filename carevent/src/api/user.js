import request from '../utils/request'

export async function login(data) {
  console.log('user/loggedin', data)
  return request('user/login', {
    method: 'post',
    body: JSON.stringify(data),
  })
}
