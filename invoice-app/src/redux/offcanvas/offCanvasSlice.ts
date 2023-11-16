import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type stateType = {
	isOpen: boolean;
	contentKey: string | null; // Use a key to identify the content
};

const initialState: stateType = {
	isOpen: false,
	contentKey: null,
};

const offCanvasSlice = createSlice({
	name: 'offcanvas',
	initialState,
	reducers: {
		toggleCanvas: (state) => {
			state.isOpen = !state.isOpen;
		},
		onLoadCanvas: (state, action: PayloadAction<string>) => {
			state.contentKey = action.payload;
		},
	},
});

export const { toggleCanvas, onLoadCanvas } = offCanvasSlice.actions;

export default offCanvasSlice.reducer;
