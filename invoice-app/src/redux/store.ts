import { configureStore } from '@reduxjs/toolkit';
import invoiceSlice from './invoice/invoiceSlice';
import offCanvasSlice from './offcanvas/offCanvasSlice';
import modalSlice from './modal/modalSlice';
import formDataSlice from './form/formDataSlice';

export const store = configureStore({
	reducer: {
		invoice: invoiceSlice,
		offCanvas: offCanvasSlice,
		modal: modalSlice,
		form: formDataSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
