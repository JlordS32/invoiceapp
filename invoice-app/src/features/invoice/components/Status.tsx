import styles from '../../../assets/styles/modules/status.module.css';

const Status = ({ status }: { status: string }) => {

	return (
		<div className={`${styles.status} ${styles[status]}`}>
			<div className='d-flex justify-content-center align-items-center'>
				<div className={styles.circle}></div>
				<span>{status}</span>
			</div>
		</div>
	);
};

export default Status;
