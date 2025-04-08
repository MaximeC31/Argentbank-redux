import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',

	initialState: {
		firstName: '',
		lastName: '',
	},

	reducers: {
		setUserProfile: (state, { payload }) => {
			state.firstName = payload.firstName;
			state.lastName = payload.lastName;
		},

		clearUserProfile: (state) => {
			state.firstName = '';
			state.lastName = '';
		},
	},
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;