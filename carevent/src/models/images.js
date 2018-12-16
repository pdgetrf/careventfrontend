import { fetchPhotoPublicsorted } from "../api/images";

export default {
  namespace: "images",
  state: {
    imagesPublicSorted: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetchPhotoPublicsorted);
      yield put({ type: "save", payload: { imagesPublicSorted: response } });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
