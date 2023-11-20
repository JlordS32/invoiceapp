import { useRouteError, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
import styles from '../../assets/styles/modules/error/notfound.module.css';

const ErrorPage = () => {
	const error = useRouteError() as {
		statusText: string;
		message: string;
	};

	return (
		<div className='layout'>
			<main>
				<div className={styles.notFound}>
					<h1 className='text--h1'>Oops! Something went wrong.</h1>
					<p className={styles.errorMsg}>{error.message ?? error.statusText}</p>
				</div>
			</main>
		</div>
	);
};

export default ErrorPage;
