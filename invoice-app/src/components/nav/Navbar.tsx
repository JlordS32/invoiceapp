import { useEffect } from 'react';

// styles
import styles from '../../assets/styles/modules/nav.module.css';

// svgs, images
import logo from '../../assets/svg/logo.svg';
import avatar from '../../assets/img/image-avatar.jpg';
import sunSvg from '../../assets/svg/icon-sun.svg';
import moonSvg from '../../assets/svg/icon-moon.svg';

// utils
import useDarkModeToggle from '../../hooks/useDarkMode';
import useLocalStorage from '../../hooks/useLocalStorage';

const Navbar = () => {
	const { isDarkMode, toggleTheme, setDarkMode } = useDarkModeToggle();
	const [value, setValue] = useLocalStorage('isDarkMode', isDarkMode);

	const handleToggleDarkMode = () => {
		toggleTheme();
		setValue(!isDarkMode);
	};

	useEffect(() => {
		const darkmode = value ?? isDarkMode;
		setDarkMode(darkmode);
	}, [value, isDarkMode]);

	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				<img
					src={logo}
					alt='logo'
				/>
			</div>

			<div className={styles.wrapper}>
				<div
					className={styles.darkmodeToggle}
					onClick={handleToggleDarkMode}
				>
					<img
						src={isDarkMode ? sunSvg : moonSvg}
						alt='toggle-darkmode'
					/>
				</div>
				<div className={styles.imgContainer}>
					<img
						src={avatar}
						alt='profile picture'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
