import axios from 'axios';
import { generateInvoiceId } from '../../utilities/GetInvoiceId';
export async function usePostData(url: string, data: any) {
	return await axios({
		url: url,
		method: 'POST',
		data: { id: generateInvoiceId(), ...data },
	}).then((res) => res.data);
}
