import { FormErrorType } from '../../../../types';
import ItemList from './ItemList';
export interface ItemListProps {
	update: (data: any) => void;
	updateErrorForm: (data: any) => void;
	formError?: FormErrorType;
}
const index = (props: ItemListProps) => {
	return <ItemList {...props} />;
};

export default index;
