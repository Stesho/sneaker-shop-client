import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: localStorage.getItem('userIsAuth') || false,
    props: JSON.parse(localStorage.getItem('userProps')) || {},
    orders: JSON.parse(localStorage.getItem('userOrders')) || [],
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
      localStorage.setItem('userIsAuth', state.isAuth);
    },
    setUserProps(state, action) {
      state.props = {...state.props, ...action.payload};
      localStorage.setItem('userProps', JSON.stringify(state.props));
    },
    addOrder(state, action) {
      state.orders.push(...action.payload);
      localStorage.setItem('userOrders', JSON.stringify(state.orders));
    },
    clearOrders(state) {
      state.orders = [];
      localStorage.setItem('userOrders', JSON.stringify(state.orders));
    }
  }
});

export const { setIsAuth, setUserProps, addOrder, clearOrders } = userSlice.actions;
export default userSlice.reducer;
