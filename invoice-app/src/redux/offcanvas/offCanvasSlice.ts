import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type stateType = {
	isOpen: boolean;
};

const initialState: stateType = {
	isOpen: false,
};

const offCanvasSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {
		toggleCanvas: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleCanvas } = offCanvasSlice.actions;

export default offCanvasSlice.reducer;
