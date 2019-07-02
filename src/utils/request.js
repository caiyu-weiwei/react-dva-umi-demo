import fetch from 'dva/fetch'


export default async function request(url, options) {
  const response = fetch(url, options)
  const data = await response.json()

  const ret = {
    data,
    headers: {}
  }

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count')
  }

  return ret

}