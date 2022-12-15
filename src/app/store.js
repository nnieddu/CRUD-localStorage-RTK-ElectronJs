import { configureStore } from '@reduxjs/toolkit'
import postReducer from './features/posts/postSlice'
import userReducer from './features/user/userSlice'
import uiReducer from './features/ui/uiSlice'

export const store = configureStore({
  reducer: {
		storePosts: postReducer,
		storeUsers: userReducer,
		storeUi		: uiReducer,
	},
})