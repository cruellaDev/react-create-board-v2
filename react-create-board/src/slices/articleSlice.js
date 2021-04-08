import { createSlice } from "@reduxjs/toolkit";

const name = "article";

const initialState = {
  articleList: [],
  status: 0,
  statusText: "Unknown",
};

const reducers = {
  selectArticleList: (state, action) => {},
  selectArticleListSccs: (state, action) => {
    state.articleList = action.payload?.data ?? [];
    state.status = action.payload?.status;
    state.statusText = action.payload?.statusText ?? "";
  },
  selectArticleListFail: (state, action) => {
    state.articleList = initialState.articleList;
    state.status = action.payload?.status ?? 500;
    state.statusText = action.payload?.statusText ?? "Network Error";
  },

  selectArticle: (state, action) => {}, // 애초에 조회할 때 조회수가 update 되는 거면 그냥 put 으로 수정하고 받은 값으로 뿌리기
  selectArticleSccs: (state, action) => {},
  selectArticleFail: (state, action) => {},
};

const articleSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const articleReducer = articleSlice.reducer;
export const articleActions = articleSlice.actions;
