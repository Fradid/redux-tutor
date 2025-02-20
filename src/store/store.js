import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";

const reducers = combineReducers({
	favorites: favoriteReducer,
	user: userSlice.reducer,
	[api.reducerPath]: api.reducer
});

export default configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
