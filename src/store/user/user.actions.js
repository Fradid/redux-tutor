import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) =>
	new Promise((res) =>
		setTimeout(() => {
			res({ id: 1, name: "Bohdan" });
		}, 1000)
	);

export const getUserById = createAsyncThunk(
	"users/by-id",
	async (userId, thunkApi) => {
		const res = await fetchUserById(userId);
		return res;
	}
);
