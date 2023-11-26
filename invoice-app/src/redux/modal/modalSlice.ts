import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ContentKey = 'confirm-delete' | '';

type stateType = {
	isOpen: boolean;
	contentKey: ContentKey;
};

const initialState: stateType = {
	isOpen: false,
	contentKey: '',
};

const modalSlice = createSlice({
	name: 'offcanvas',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.isOpen = !state.isOpen;
		},
		loadModal: (state, payload: PayloadAction<ContentKey>) => {
			state.contentKey = payload.payload;
		},
	},
});

export const { toggleModal, loadModal } = modalSlice.actions;

export default modalSlice.reducer;
