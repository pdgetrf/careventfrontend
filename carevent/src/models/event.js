import { fetchEventList } from "../api/event";

export default {
  namespace: "event",
  state: {
    eventList: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetchEventList);
      yield put({ type: "save", payload: { eventList: response } });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
