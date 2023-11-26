import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type contentKey = 'create-invoice' | 'edit-invoice' | '';

type stateType = {
	isOpen: boolean;
	contentKey: contentKey; // Use a key to identify the content
};

const initialState: stateType = {
	isOpen: false,
	contentKey: '',
};

const offCanvasSlice = createSlice({
	name: 'offcanvas',
	initialState,
	reducers: {
		toggleCanvas: (state) => {
			state.isOpen = !state.isOpen;
		},
		onLoadCanvas: (state, action: PayloadAction<contentKey>) => {
			state.contentKey = action.payload;
		},
	},
});

export const { toggleCanvas, onLoadCanvas } = offCanvasSlice.actions;

export default offCanvasSlice.reducer;
