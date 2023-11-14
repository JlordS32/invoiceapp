import styles from '../../assets/styles/modules/buttons.module.css';
import { useNavigate } from 'react-router-dom';

// images
import arrowLeft from '../../assets/svg/icon-arrow-left.svg';

const GoBack = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.goBack}>
			<img
				src={arrowLeft}
				alt='arrow left'
			/>
			<p onClick={() => navigate(-1)}>Go back</p>
		</div>
	);
};

export default GoBack;
