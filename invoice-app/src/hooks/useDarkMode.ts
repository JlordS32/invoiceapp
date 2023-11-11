import { useEffect, useState } from 'react';

const applyTheme = (isDarkMode: boolean) => {
	const root = document.documentElement;

	if (isDarkMode) {
		root.style.setProperty('--body-bg', 'var(--dark)');
		root.style.setProperty('--form-bg', 'var(--dark-mode-form-bg)');
		root.style.setProperty('--form-outline', 'var(--dark-mode-form-outline)');
		root.style.setProperty('--form-label', 'var(--dark-mode-form-label)');
		root.style.setProperty('--form-placeholder', 'var(--white)');
		root.style.setProperty(
			'--box-shadow',
			'0px 10px 20px 0px rgba(0, 0, 0, 0.25)'
		);
		root.style.setProperty('--form-text', 'var(--white)');
		root.style.setProperty('--text', 'var(--white)');
		root.style.setProperty('--text-2', 'var(--05)');
	} else {
		root.style.setProperty('--body-bg', 'hsl(240, 27%, 98%)');
		root.style.setProperty('--form-outline', 'hsl(231, 73%, 93%)');
		root.style.setProperty('--form-label', 'var(--07)');
		root.style.setProperty('--form-bg', 'var(--white)');
		root.style.setProperty('--form-placeholder', 'var(--dark)');
		root.style.setProperty(
			'--box-shadow',
			'0px 10px 20px 0px rgba(72, 84, 159, 0.25)'
		);
		root.style.setProperty('--form-text', 'var(--08)');
		root.style.setProperty('--text', 'var(--dark)');
		root.style.setProperty('--text-2', 'var(--06)');
	}
};

const useDarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		applyTheme(isDarkMode);
	}, [isDarkMode]);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleMediaQueryChange = () => {
			applyTheme(isDarkMode);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, [isDarkMode]);

	return {
		isDarkMode,
		toggleTheme,
	};
};

export default useDarkModeToggle;
