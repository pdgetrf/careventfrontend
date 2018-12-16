import request from '../utils/request'

export async function fetchPhotoPublicsorted() {
  return request('photo/publicsorted', {
    method: 'get',
  })
}
