import ItemList from './ItemList';
import { FormDataType } from '../../../../types';
export interface ItemListProps {
	update: (data: FormDataType) => void;
}
const index = (props: ItemListProps) => {
	return <ItemList {...props} />;
};

export default index;
