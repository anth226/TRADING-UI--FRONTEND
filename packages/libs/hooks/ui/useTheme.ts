import { Theme } from '@option-blitz/libs/types/ui/theme';
import { useCallback, useEffect, useState } from 'react';

const defaultTheme = Theme.dark;

export const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }, [theme, setTheme]);

  useEffect(() => {
    switch (theme) {
      case Theme.light:
        document.documentElement.classList.add('theme_light');
        document.documentElement.classList.remove('theme_dark');
        break;
      case Theme.dark:
        document.documentElement.classList.add('theme_dark');
        document.documentElement.classList.remove('theme_light');
        break;
      default:
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === Theme.dark,
  };
};
