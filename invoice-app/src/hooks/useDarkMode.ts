import { useEffect, useState } from 'react';

const applyTheme = (isDarkMode: boolean) => {
	const root = document.documentElement;
	const styles = {
		dark: {
			'--body-bg': 'var(--dark)',
			'--form-bg': 'var(--dark-mode-form-bg)',
			'--form-outline': 'var(--dark-mode-form-outline)',
			'--form-label': 'var(--dark-mode-form-label)',
			'--form-placeholder': 'var(--white)',
			'--box-shadow': '0px 10px 20px 0px rgba(0, 0, 0, 0.25)',
			'--form-text': 'var(--white)',
			'--text': 'var(--white)',
			'--text-2': 'var(--05)',
			'--checkbox-bg': 'var(--03)',
			'--draft': 'var(--05)',
			'--box-bg': 'var(--03)',
			'--text-hover': 'var(--07)',
			'--text-3': 'var(--05)',
			'--box-bg-2': 'var(--04)',
			'--nav-bg': 'var(--03)',
			'--box-bg-3': 'var(--08)',
			'--edit-btn-bg': 'var(--04)',
			'--edit-btn-hover': 'var(--white)',
			'--edit-btn-text': 'var(--05)',
			'--draft-btn-bg': 'hsl(231, 20%, 27%)',
			'--draft-btn-text': 'var(--05)',
			'--draft-btn-hover': 'var(--03)',
		},
		light: {
			'--body-bg': 'hsl(240, 27%, 98%)',
			'--form-outline': 'hsl(231, 73%, 93%)',
			'--form-label': 'var(--07)',
			'--form-bg': 'var(--white)',
			'--form-placeholder': 'var(--dark)',
			'--box-shadow': '0px 10px 20px 0px rgba(72, 84, 159, 0.25)',
			'--form-text': 'var(--08)',
			'--text': 'var(--dark)',
			'--text-2': 'var(--06)',
			'--checkbox-bg': 'var(--05)',
			'--draft': 'hsl(231, 20%, 27%)',
			'--box-bg': 'var(--white)',
			'--text-hover': 'var(--06)',
			'--text-3': 'var(--07)',
			'--box-bg-2': 'hsl(228, 71%, 99%)',
			'--nav-bg': 'hsl(231, 20%, 27%)',
			'--box-bg-3': 'hsl(231, 20%, 27%)',
			'--edit-btn-bg': 'hsl(228, 71%, 99%)',
			'--edit-btn-hover': 'hsl(231, 73%, 93%)',
			'--edit-btn-text': 'var(--07)',
			'--draft-btn-bg': 'hsl(231, 20%, 27%)',
			'--draft-btn-text': 'var(--06)',
			'--draft-btn-hover': 'var(--08)',
		},
	};

	const selectedStyle = isDarkMode ? styles.dark : styles.light;

	for (const [property, value] of Object.entries(selectedStyle)) {
		root.style.setProperty(property, value);
	}
};

const useDarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const setDarkMode = (value: boolean) => {
		if (typeof value === 'boolean') {
			setIsDarkMode(value);
		} else {
			throw new Error('Invalid value to set dark mode!. Value must be boolean');
		}
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
		setDarkMode,
	};
};

export default useDarkModeToggle;
