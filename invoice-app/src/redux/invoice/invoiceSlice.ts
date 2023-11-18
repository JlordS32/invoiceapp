import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InvoiceType } from '../../types/InvoiceTypes';
import { useFetchData } from '../../hooks/useFetch';

interface stateType {
	invoiceItems: InvoiceType[];
	loading: boolean;
	sortedInvoice: InvoiceType[];
}

const initialState: stateType = {
	invoiceItems: [],
	loading: false,
	sortedInvoice: [],
};

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {
		updateSortedInvoice: (state, action: PayloadAction<InvoiceType[]>) => {
			state.sortedInvoice = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getInvoiceAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				getInvoiceAsync.fulfilled,
				(state, action: PayloadAction<InvoiceType[]>) => {
					state.loading = false;
					state.invoiceItems = [...action.payload];
				}
			);
	},
});

export const getInvoiceAsync = createAsyncThunk(
	'invoice/getInvoiceAsync',
	async (url: string) => {
		const data = await useFetchData(url);
		return data;
	}
);

export const { updateSortedInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
