import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts",async (url,{ rejectWithValue })=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
   
})

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
