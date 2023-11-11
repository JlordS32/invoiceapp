// rrd imports
import { Outlet, ScrollRestoration } from 'react-router-dom';

// components
import Navbar from '../components/nav/Navbar';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Navbar />
			<main
				style={{
					marginLeft: '8rem',
				}}
			>
				<Outlet />
			</main>
			<ScrollRestoration />
		</div>
	);
};

export default MainLayout;
