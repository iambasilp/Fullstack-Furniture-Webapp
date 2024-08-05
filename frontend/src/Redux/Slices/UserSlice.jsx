import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null || JSON.parse(localStorage.getItem("CurrentUser")),
  newUser:null || JSON.parse(localStorage.getItem('NewUser')),
  error:null,
  isLoading:false
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3010/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("CurrentUser", JSON.stringify(user));
        return user;
      } else {
        return rejectWithValue("Invalid Email Or PassWord");
      }
    } catch (error) {
      return rejectWithValue("Login Failed");
    }
  }
);

export const signupUser = createAsyncThunk('user/signupUser',async({name,email,password},{rejectWithValue})=>{
  try{
       const response = await fetch('http://localhost:3010/users',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({name,email,password})
       })
       if(response.ok){
        const NewUser = await response.json();
        localStorage.setItem('NewUser',JSON.stringify(NewUser))
        return NewUser
       }else{
        return rejectWithValue("SignUp Failed")
       }
  }catch(error){
    return rejectWithValue("SignUp Failed")
  } 
})

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLogout(state){
        localStorage.removeItem('CurrentUser')
      state.currentUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newUser = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      
  },
});

export default UserSlice.reducer
export const {handleLogout} = UserSlice.actions
