import * as usersServices from '../services/users'
export default {
  namespace: 'users',

  state: {
    list: [],
    total: null,
    page: null
  },

  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return {...state, list, total, page}
    }
  },

  effects: {
    *fetch({ page=1 }, { call, put }) {
      const { data, headers } = yield call(usersServices.fetch, { page })
      console.log('fetch', data)
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page
        }
      })
    },

    *create({ payload: values }, { put, call, select }) {
      const { data } = yield call(usersServices.create, values)
      // const res = yield call(usersServices.create, values)
      console.log('create', data)
      const page = select(state => state.users.page)
      yield put({
        type: 'fetch',
        payload: { page }
      })
    }
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({ pathname, query }) => {
        console.log('subscriptions pathname', pathname)
        if (pathname === '/users') {
          dispatch({
            type: 'fetch',
            payload: query
          })
        }
      })
    }
  }
}