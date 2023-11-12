import { useNavigate, useLoaderData } from 'react-router-dom';

interface paramsType {
	id: string;
}

export function invoiceLoader({ params }: { params: paramsType }) {
	const id = params.id;

	return { id };
}
const Invoice = () => {
	const navigate = useNavigate();

	const { id } = useLoaderData() as paramsType;

	return (
		<div>
			<p
				onClick={() => navigate(-1)}
			>
				Go back
			</p>
			<h1>{id}</h1>
		</div>
	);
};

export default Invoice;
