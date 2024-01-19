import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	isLoading: false,
	error: false,
	expenseList: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.currentUser = action.payload;
		},
		loginFailed: (state) => {
			state.isLoading = false;
			state.error = true;
		},
		logout: () => {
			return initialState;
		},
		addExpense: (state, action) => {
			state.expenseList.push(action.payload);
		},
		updateExpenseList: (state, action) => {
			state.expenseList = action.payload;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailed,
	logout,
	addExpense,
	updateExpenseList,
} = userSlice.actions;

export default userSlice.reducer;
