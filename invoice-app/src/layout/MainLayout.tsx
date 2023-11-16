// rrd imports
import { Outlet, ScrollRestoration } from 'react-router-dom';

// components
import Navbar from './Navbar';
import OffCanvas from '../components/offCanvas/OffCanvas';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Navbar />
			<main>
				<Outlet />
				<OffCanvas />	
			</main>
			<ScrollRestoration />
		</div>
	);
};

export default MainLayout;
