import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: null,
  totalAmount:0
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (newCartItem, { getState, rejectWithValue }) => {
    const { currentUser } = getState().users;
    const { cartItems } = getState().cart;

    const exisitngCartItem = cartItems.find(
      (item) => item.id === newCartItem.id
    );
    let updatedCartItems;
    if (exisitngCartItem) {
      updatedCartItems = cartItems.map((item) =>
        item.id == newCartItem.id ? { ...item, count: (item.count+1) } : item
      );
    }else{
        updatedCartItems = [...cartItems, {...newCartItem,count:1}]
    }
    try {
      const response = await fetch(
        `http://localhost:3010/users/${currentUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...currentUser, cart: updatedCartItems }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const updatedUser = await response.json();
      return updatedUser.cart;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
         state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.new_price * item.count,
          0
        );
      })
    
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;

