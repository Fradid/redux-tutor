import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../store/favorites/favorites.slice";
import * as userActions from "../store/user/user.actions";

export const useActions = () => {
	const dispatch = useDispatch();

	const rootActions = { ...actions, ...userActions };

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
