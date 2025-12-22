import { configureStore } from "@reduxjs/toolkit";
import { LoginApis } from "../Apis/LoginApis";
import { ProductApis } from "../Apis/ProductApis";

export const store = configureStore({
  reducer: {
    [LoginApis.reducerPath]: LoginApis.reducer,
    [ProductApis.reducerPath]: ProductApis.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(LoginApis.middleware)
      .concat(ProductApis.middleware),
});

export default store;
