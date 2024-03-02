import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../store/favorites/favorites.slice";

export const useActions = () => {
	const dispatch = useDispatch();

	const rootActions = { ...actions };

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
