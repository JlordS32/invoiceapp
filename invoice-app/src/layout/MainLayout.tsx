// rrd imports
import { Outlet, ScrollRestoration } from 'react-router-dom';

// components
import Navbar from './Navbar';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<ScrollRestoration />
		</div>
	);
};

export default MainLayout;
