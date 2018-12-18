import { login } from '../api/user'

export default {
  namespace: 'login',
  state: {
    user: [],
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login)
      yield put({ type: 'save', payload: { user: response } })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
  },
}
