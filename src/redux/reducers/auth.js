import { createSlice } from '@reduxjs/toolkit'
const initialState={
    user:null,
    error:null,
    isAuthenticated:false,
    isAuthenticating:false,
    statusText:null,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginRequest:(state,action)=>{
            state.isAuthenticating=true
            state.isAuthenticated=false
            state.user=action.payload
        }
    }
})

export default authSlice.reducer

export const {

} = authSlice.actions
