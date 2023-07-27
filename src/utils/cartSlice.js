import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //originalState = ["pizza"]
    clearCart: (state) => {
      //Redux ToolKit - either Mutate the existing state or return a new state
      state.items.length = 0; //originalState = []

      //return { items: [] }        //this new obj will be replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
