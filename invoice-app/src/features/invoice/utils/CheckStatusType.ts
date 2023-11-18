import { paymentStatusType } from '../../../types/StatusType';

export default function checkStatusType(value: string): paymentStatusType {
	const paymentStatus: paymentStatusType[] = ['pending', 'draft', 'paid'];

	let status: paymentStatusType;

	if (paymentStatus.includes(value as paymentStatusType)) {
		status = value as paymentStatusType;
	} else {
		status = 'error';
	}

	return status;
}
