// react
import {
	useImperativeHandle,
	useRef,
	forwardRef
} from 'react';

// styles

import styles from '../../assets/styles/modules/dropdown.module.css';

// svg
import downArrow from '../../assets/svg/icon-arrow-down.svg';

import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

export interface OptionType {
	label: string;
	value: string;
}

interface DropdownProps {
	options?: OptionType[];
	label?: string;
	smallScreenIcon: React.ReactNode;
	searchParam: string;
}

export interface DropdownRef {
	value: OptionType[];
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	// TODO url params persistant

	const { options, searchParam } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	// rrd
	const navigate = useNavigate();
	const location = useLocation();

	const isWide = useMediaQuery({
		query: '(min-width: 768px)',
	});

	useImperativeHandle(ref, () => {
		return {
			get value() {
				return [];
			},
		};
	});

	const handleClick = (option: OptionType) => {
		const selectedOption = option.value;
		const searchParams = new URLSearchParams(location.search);
		const existingParams = searchParams.get(searchParam)?.split(',');

		if (!existingParams) {
			searchParams.set(searchParam, selectedOption);
		} else {
			const optionExist = existingParams.some(
				(option) => option === selectedOption
			);

			if (optionExist) {
				existingParams?.splice(existingParams?.indexOf(selectedOption));
			} else {
				existingParams?.push(selectedOption);
			}

			if (existingParams) {
				searchParams.set(searchParam, existingParams.join(','));
			}
		}

		navigate({
			pathname: location.pathname,
			search: searchParams.toString(),
		});
	};

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
								return (
									<div
										onClick={() => {
											handleClick(option);
										}}
										key={index}
									>
										<div className={`${styles.checkbox}`}></div>
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
