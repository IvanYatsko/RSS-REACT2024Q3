import { createContext, useState } from 'react';
import IThemeContext from '../types/themeContext';
import IThemeProviderProps from '../types/themeProviderProps';

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
