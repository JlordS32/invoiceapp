// react
import {
	useImperativeHandle,
	useRef,
	forwardRef,
	useState,
	useEffect,
} from 'react';

// styles

import styles from '../../assets/styles/modules/dropdown.module.css';

// svg
import downArrow from '../../assets/svg/icon-arrow-down.svg';

interface DropdownProps {
	options?: string[];
	label?: string;
	onChange?: (value?: string) => void;
}

export interface DropdownRef {
	value: string[];
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	const { options } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const [selectedOption, setSelectedOption] = useState<string[]>([]);

	useImperativeHandle(ref, () => {
		return {
			get value() {
				return selectedOption || [];
			},
		};
	});

	const handleClick = (option: string) => {
		if (selectedOption.includes(option)) {
			setSelectedOption((prev) => {
				const filteredData = prev.filter((item) => item !== option);
				return filteredData;
			});
		} else {
			setSelectedOption((prev) => {
				return [...prev, option];
			});
		}
	};

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<>
			<div
				className={styles.dropdown}
				onClick={() => {
					if (dialogRef.current) {
						dialogRef.current.show();
					}
				}}
				onBlur={() => {
					if (dialogRef.current) {
						dialogRef.current.close();
					}
				}}
			>
				<p>{props.label ?? 'Filter'}</p>
				<img
					src={downArrow}
					style={{
						transform: dialogRef.current?.open
							? 'rotate(180deg)'
							: 'rotate(0deg)',
					}}
					alt='down arrow'
				/>
				{options && (
					<dialog
						ref={dialogRef}
						className={`${styles.dropdownDialog} animate fadeIn animate--fast`}
					>
						{options?.map((option, index) => {
							return (
								<div
									onClick={() => {
										handleClick(option);
									}}
									key={index}
								>
									<div
										className={`${styles.checkbox} ${
											selectedOption.includes(option) ? styles.checked : ``
										}`}
									></div>
									<span className='body-text-2'>{option}</span>
								</div>
							);
						})}
					</dialog>
				)}
			</div>
		</>
	);
});

export default Dropdown;
