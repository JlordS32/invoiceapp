import styles from '../assets/styles/modules/buttons.module.css';
import plusSvg from '../assets/svg/icon-plus.svg';

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
};

const Button = (props: CustomButtonProps) => {
	const { variant } = props;

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
			<span>{props.children}</span>
		</button>
	);
};

export default Button;
