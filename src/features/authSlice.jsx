import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  loading: false,
  error: false,
  token: "",
  id: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.user.username
      state.token = payload.token
      state.id = payload.user._id
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.data.username
      state.token = payload.token
    },
    logoutSuccess: (state) => {
      state.user = ""
      state.loading = false
      state.token = ""
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions

export default authSlice.reducer
