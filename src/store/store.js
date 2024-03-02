import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";

const reducers = combineReducers({ favorites: favoriteReducer });

export default configureStore({
	reducer: reducers,
});
