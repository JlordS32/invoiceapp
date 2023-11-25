import axios from 'axios';
import { generateInvoiceId } from '../../utilities/GetInvoiceId';
export async function usePostData(url: string, data: any) {
	return await axios({
		url: url,
		method: 'POST',
		data: { id: generateInvoiceId(), ...data },
	}).then((res) => res.data);
}

export async function usePostDataById(url: string, id: string, data: any) {
	return await axios({
		url: `${url}/${id}`,
		method: 'POST',
		data: data,
	}).catch((err) => {
		console.log(err.response.data.message);
	});
}
