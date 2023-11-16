import { useMediaQuery } from 'react-responsive';

import styles from '../../assets/styles/modules/buttons.module.css';
import plusSvg from '../../assets/svg/icon-plus.svg';

type ButtonTypes =
	| ''
	| 'default'
	| 'addButton'
	| 'editButtonLight'
	| 'editButtonDark'
	| 'deleteButton'
	| 'saveAsDraftButtonDark'
	| 'saveAsDraftButtonLight'
	| 'addNewItemButton';

type CustomButtonProps = React.HTMLProps<HTMLButtonElement> & {
	width?: string;
	type?: 'button' | 'reset' | 'submit';
	variant?: ButtonTypes;
	shortText?: string;
};

const Button = (props: CustomButtonProps) => {
	const { variant } = props;

	const isWide = useMediaQuery({ minWidth: 768 });

	return (
		<button
			className={`${styles.button} ${styles[variant ?? '']}`}
			{...props}
		>
			{variant && variant === 'addButton' && (
				<div className={styles.plusSvg}>
					<img
						src={plusSvg}
						alt=''
						style={{
							width: '10px',
							height: '10px',
						}}
					/>
				</div>
			)}
			<span>{isWide ? props.children : props.shortText ?? props.children}</span>
		</button>
	);
};

export default Button;
