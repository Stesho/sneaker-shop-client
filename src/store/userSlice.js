import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: localStorage.getItem('userIsAuth') || false,
    props: JSON.parse(localStorage.getItem('userProps')) || {},  
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
      localStorage.setItem('userIsAuth', state.isAuth);
    },
    setUserProps(state, action) {
      state.props = {...state.props, ...action.payload};
      localStorage.setItem('userProps', JSON.stringify(state.props));
    }
  }
});

export const { setIsAuth, setUserProps } = userSlice.actions;
export default userSlice.reducer;
