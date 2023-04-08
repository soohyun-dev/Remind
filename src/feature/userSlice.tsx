import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { RootState } from "../store/store";

const initialState = {
  user: null,
  email: null,
  nickname: null,
  docId: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.docId = action.payload.docId;
    },
    logout: (state) => {
      state.email = null;
      state.nickname = null;
      state.docId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserEmail = (state: RootState) => {
  console.log(state);
  return state.user.email;
};
export const selectNickname = (state: RootState) => state.user.nickname;
export const selectDocId = (state: RootState) => state.user.docId;

export default userSlice.reducer;
