import { createSlice } from '@reduxjs/toolkit'
const initialState={
    user:null,
    error:null,
    isAuthenticated:false,
    isAuthenticating:false,

}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        
    }
})

export default authSlice.reducer

export const {

} = authSlice.actions
