import fetch from 'dva/fetch'

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export default function request(url, options) {
  const baseUrl =
    'http://ec2-18-191-255-17.us-east-2.compute.amazonaws.com:8080/'
  return fetch(baseUrl + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => data.data || data)
    .catch((err) => ({ err }))
}
