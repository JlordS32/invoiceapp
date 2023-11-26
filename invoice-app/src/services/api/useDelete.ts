import axios from 'axios';

export async function useDelete(url: string, id: string) {
	return await axios({
		url: `${url}/${id}`,
		method: 'DELETE',
	})
		.then((res) => {
			console.log(res.data);
		})
		.catch((error) => {
			console.error(error);
		});
}
