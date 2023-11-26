import { createSlice } from '@reduxjs/toolkit';

type stateType = {
	isOpen: boolean
};

const initialState: stateType = {
	isOpen: false,
};

const modalSlice = createSlice({
	name: 'offcanvas',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.isOpen = !state.isOpen;
		}
	},
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
