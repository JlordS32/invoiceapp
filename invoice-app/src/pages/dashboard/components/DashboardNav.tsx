// styles
import styles from '../../../assets/styles/modules/dashboard/dashboard.module.css';

// components
import Button from '../../../components/button/Button';
import Filter from './Filter';
import Sort from './Sort';

// libraries
import { useMediaQuery } from 'react-responsive';

// redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
	toggleCanvas,
	onLoadCanvas,
} from '../../../redux/offcanvas/offCanvasSlice';

// type
interface DashbordNavProps {
	length?: number;
}

const DashboardNav = ({ length }: DashbordNavProps) => {
	const isWide = useMediaQuery({ minWidth: 768 });

	const dispatch = useDispatch<AppDispatch>();
	const toggleOffCanvas = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas('create-invoice'));
	};

	return (
		<div className={styles.dashboardNav}>
			<div className='mr-auto'>
				<h1 className='text--h1'>Invoices</h1>
				<div className='body-text-2'>
					<p>
						{length && length > 0 ? (
							<span>{`${
								isWide
									? 'There are ' + length + ' total invoices'
									: length + ' invoices'
							}`}</span>
						) : (
							<span>No Invoices</span>
						)}
					</p>
				</div>
			</div>

			<Filter />

			<Sort />

			<Button
				variant='addButton'
				shorttext='New'
				onClick={toggleOffCanvas}
			>
				New Invoice
			</Button>
		</div>
	);
};

export default DashboardNav;
