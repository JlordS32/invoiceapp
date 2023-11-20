import { useRouteError, Link, useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/modules/error/notfound.module.css';
import Button from '../../components/button/Button';

const ErrorPage = () => {
	const error = useRouteError() as {
		statusText: string;
		message: string;
	};

	const navigate = useNavigate();

	return (
		<div className='layout'>
			<main>
				<div className={styles.notFound}>
					<h1 className='text--h1'>Oops! Something went wrong.</h1>
					<p className={styles.errorMsg}>{error.message ?? error.statusText}</p>

					<div className='d-flex gap-3 mt-2'>
						<Link to='/'>
							<Button>Go Home</Button>
						</Link>
						<Button
							variant='saveAsDraftButton'
							onClick={() => navigate(-1)}
						>
							Go Back
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ErrorPage;
