import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice';
import asideReducer from '../features/aside/asideSlice';
import formReducer from '../features/form/formSlice';

import api from '../utils/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    aside: asideReducer,
    form: formReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
