import {
	useImperativeHandle,
	useRef,
	forwardRef,
	useState,
	useEffect,
} from 'react';

import styles from '../../assets/styles/modules/buttons.module.css';

// svg
import downArrow from '../../assets/svg/icon-arrow-down.svg';

interface DropdownProps {
	options?: string[];
	onChange?: (value?: string) => void;
}

export interface DropdownRef {
	value: string;
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
	const { options } = props;
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const [selectedOption, setSelectedOption] = useState<string>(
		(options && options[0]) ?? ''
	);

	useImperativeHandle(ref, () => {
		return {
			get value() {
				return selectedOption || '';
			},
		};
	});

	useEffect(() => {
		setSelectedOption((options && options[0]) ?? '');
	}, []);

	return (
		<>
			<div
				className={styles.dropdown}
				onClick={() => {
					if (dialogRef.current) {
						if (dialogRef.current.open) {
							dialogRef.current.close();
						} else {
							dialogRef.current.show();
						}
					}
				}}
			>
				<p>
					Filter by <span>{selectedOption}</span>
				</p>
				<img
					src={downArrow}
					alt='down arrow'
				/>
				{options && (
					<dialog
						ref={dialogRef}
						className={`${styles.dropdownDialog} animate fadeIn animate--fast`}
					>
						{options?.map((option) => {
							return (
								<div
									onClick={() => {
										setSelectedOption(option);
									}}
								>
									<span>{option}</span>
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
