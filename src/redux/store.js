import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
