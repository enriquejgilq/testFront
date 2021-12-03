export const totalState = state => state.cart;
export const addTocart = state => totalState(state).total;