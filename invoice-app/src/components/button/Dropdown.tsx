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
	setSelectedOption: React.Dispatch<React.SetStateAction<OptionType[]>>;
	selectedOption: OptionType[];
}

export interface DropdownRef {
	value: OptionType[];
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	// TODO url params persistant

	const { options } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const { selectedOption, setSelectedOption } = props;

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
		const optionExists =
			selectedOption &&
			selectedOption.some((item) => {
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

	// useEffect
	useEffect(() => {
		const currentParams = new URLSearchParams(location.search);
		const filterValues = currentParams.get('filter')?.split(',');
		const sortedValues = currentParams.get('sort')?.split(',');

		if (
			(filterValues && filterValues.length > 0) ||
			(sortedValues && sortedValues.length > 0)
		) {
			const mergedValues = [...(filterValues ?? []), ...(sortedValues ?? [])];
			const updatedValues =
				mergedValues &&
				mergedValues.map((value) => {
					return {
						label: value[0].toUpperCase() + value.slice(1),
						value: value,
					};
				});

			if (setSelectedOption) {
				setSelectedOption((prevOptions) => {
					const optionSet = new Set(prevOptions.map((option) => option.value));
					const newOptions = updatedValues.filter(
						(option) => !optionSet.has(option.value)
					);
					return [...prevOptions, ...newOptions];
				});
			}
		}
	}, []);

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
								const optionExists =
									selectedOption &&
									selectedOption.some((item) => {
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
												optionExists ? styles.checked : ''
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
