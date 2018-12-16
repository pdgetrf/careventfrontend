import request from '../utils/request'

export async function fetchEventList() {
  return request('events', {
    method: 'get',
  })
}
