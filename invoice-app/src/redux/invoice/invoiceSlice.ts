import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InvoiceType } from '../../features/invoice/types/InvoiceTypes';
import { useFetchData } from '../../hooks/useFetch';

interface stateType {
	invoiceItems: InvoiceType[];
	loading: boolean;
}

const initialState: stateType = {
	invoiceItems: [],
	loading: false,
};

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {},
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

export default invoiceSlice.reducer;
