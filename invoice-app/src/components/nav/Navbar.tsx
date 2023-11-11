import styles from '../../assets/styles/modules/nav.module.css';

import logo from '../../assets/svg/logo.svg';
import avatar from '../../assets/img/image-avatar.jpg';
import sunSvg from '../../assets/svg/icon-sun.svg';
import moonSvg from '../../assets/svg/icon-moon.svg';

const Navbar = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.logo}>
				<img
					src={logo}
					alt='logo'
				/>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.darkmodeToggle}>
					<img
						src={moonSvg}
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
