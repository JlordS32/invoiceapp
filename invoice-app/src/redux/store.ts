import { configureStore } from '@reduxjs/toolkit';
import invoiceSlice from './invoice/invoiceSlice';
import offCanvasSlice from './offcanvas/offCanvasSlice';

export const store = configureStore({
	reducer: {
		invoice: invoiceSlice,
		offCanvas: offCanvasSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
