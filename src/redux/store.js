// configureStore.js or your store configuration file
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";
import { api } from "./api/apiSlice";
import userReducer from "./user/userSlice";

// Configuration for redux-persist
const userPersistConfig = {
  key: "user",
  storage: storage,
  blacklist: [], // Add any properties you want to exclude from persistence
};

// Wrap the userReducer with the persistReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: persistedUserReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
