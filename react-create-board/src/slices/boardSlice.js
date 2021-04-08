import { createSlice } from "@reduxjs/toolkit";

const name = "board";

const initialState = {
    boardList: [],
    status: 0,
    statusText: "Unknown"
};

const reducers = {
    selectBoardList: (state, action) => {},
    selectBoardListSccs: (state, action) => {
        state.boardList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "";
    },
    selectBoardListFail: (state, action) => {
        state.boardList = initialState.boardList
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },
};

const boardSlice = createSlice({
    name,
    initialState,
    reducers
});

export const boardReducer = boardSlice.reducer;
export const boardActions = boardSlice.actions;