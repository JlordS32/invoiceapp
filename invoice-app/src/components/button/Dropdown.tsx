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

interface OptionType {
	label: string,
	value: string,
}

interface DropdownProps {
	options?: OptionType[];
	label?: string;
	onChange?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface DropdownRef {
	value: string[];
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	const { options } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);

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

	// custom onChange handler
	useEffect(() => {
		if (props.onChange) {
			props.onChange(selectedOption);
		}
	});

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
					className={styles.arrowIcon}
					alt='down arrow'
				/>
				{options && (
					<dialog
						ref={dialogRef}
						className={`${styles.dropdownDialog} animate fadeIn animate--fast`}
					>
						<div>
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
												selectedOption.includes(option.label) ? styles.checked : ``
											}`}
										></div>
										<span className='body-text'>{option.label}</span>
									</div>
								);
							})}
						</div>
					</dialog>
				)}
			</div>
		</>
	);
});

export default Dropdown;
