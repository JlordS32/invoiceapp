import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormDataType } from '../../types';

interface stateType {
   formData: FormDataType
}

const initialState: stateType = {
	formData: {
		senderAddress: {
         street: '',
         city: '',
         postCode: '',
         country: '',
      },
      clientAddress: {
         street: '',
         city: '',
         postCode: '',
         country: '',
      },
      clientEmail: '',
      clientName: '',
      paymentTerms: '',
      createdAt: '',
      description: '',
      paymentDue: '',
      items: [
         {
            id: '',
            name: '',
            quantity: 0,
            price: 0,
         },
      ],
	},
};

const formDataSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
      updateFormData: (state, action: PayloadAction<FormDataType>) => {
         state.formData = action.payload;
      },
   }
});

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
