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

import { useMediaQuery } from 'react-responsive';

export interface OptionType {
	label: string;
	value: string;
}

interface DropdownProps {
	options?: OptionType[];
	label?: string;
	smallScreenIcon: React.ReactNode;
	onChange?: React.Dispatch<React.SetStateAction<OptionType[]>>;
}

export interface DropdownRef {
	value: OptionType[];
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	const { options } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);

	const isWide = useMediaQuery({
		query: '(min-width: 768px)',
	});

	useImperativeHandle(ref, () => {
		return {
			get value() {
				return selectedOption || [];
			},
		};
	});

	const handleClick = (option: OptionType) => {
		const optionExists = selectedOption.some((item) => {
			return item.value === option.value;
		});

		if (optionExists) {
			setSelectedOption((prev) => {
				const filteredData = prev.filter((item) => item.value !== option.value);
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
				{isWide ? (
					<>
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
					</>
				) : (
					<>{props.smallScreenIcon}</>
				)}
				{options && (
					<dialog
						ref={dialogRef}
						className={`${styles.dropdownDialog} animate fadeIn animate--fast`}
					>
						<div>
							{options?.map((option, index) => {
								const optionExists = selectedOption.some((item) => {
									return item.value === option.value;
								});

								return (
									<div
										onClick={() => {
											handleClick(option);
										}}
										key={index}
									>
										<div
											className={`${styles.checkbox} ${
												optionExists ? styles.checked : ``
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
