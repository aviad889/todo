import {configureStore} from '@reduxjs/toolkit'
import {todoApiSlice} from './slices/toApiSlice'
import {userApiSlice} from './slices/userApiSlice'

const store = configureStore({
    reducer: {
        [todoApiSlice.reducerPath] : todoApiSlice.reducer,
        [userApiSlice.reducerPath] : userApiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
        .concat(todoApiSlice.middleware)
        .concat(userApiSlice.middleware),
    devTools: true,
  })
  export default store;