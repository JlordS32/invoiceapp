// styles
import styles from '../../../assets/styles/modules/dashboard/dashboard.module.css';

// components
import Button from '../../../components/button/Button';
import Filter from './Filter';
import Sort from './Sort';

// hero icons
import { BarsArrowDownIcon } from '@heroicons/react/24/solid';

// type
interface DashbordNavProps {
	length?: number;
}

const DashboardNav = ({ length }: DashbordNavProps) => {
	return (
		<div className={styles.dashboardNav}>
			<div className='mr-auto'>
				<h1 className='text--h1'>Invoices</h1>
				<div className='body-text-2'>
					<p>
						{length && length > 0 ? (
							<span>There are {length} total invoices</span>
						) : (
							<span>No Invoices</span>
						)}
					</p>
				</div>
			</div>

			{/* <Filter />

			<Sort /> */}

			<div>
				<BarsArrowDownIcon width={24} />
			</div>

			<Button
				variant='addButton'
				shortText='New'
			>
				New Invoice
			</Button>
		</div>
	);
};

export default DashboardNav;
