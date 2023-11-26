// rrd imports
import { Outlet, ScrollRestoration } from 'react-router-dom';

// components
import Navbar from './Navbar';
import OffCanvas from '../components/offCanvas/OffCanvas';
import Modal from '../components/modal/Modal';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Navbar />
			<main>
				<Outlet />
				<OffCanvas />
				<Modal />
			</main>
			<ScrollRestoration />
		</div>
	);
};

export default MainLayout;
