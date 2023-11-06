import React from 'react';
import styles from '../assets/styles/buttons.module.css';
import plusSvg from '../assets/svg/icon-plus.svg';

type CustomButtonProps = React.HTMLProps<HTMLButtonElement> & {
	width?: string;
	type?: 'button' | 'reset' | 'submit';
};

const Button = (props: CustomButtonProps) => {
	return (
		<button
			className={styles.button}
			style={{
				width: props.width ?? '11.53846rem',
			}}
			{...props}
		>
			<img
				src={plusSvg}
				alt=''
				style={{
					backgroundColor: 'white',
					width: '2rem',
					height: '2rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			/>
			<span>{props.children}</span>
		</button>
	);
};

export default Button;
