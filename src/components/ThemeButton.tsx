import { CiSun } from 'react-icons/ci';
import Button from './UI/Button/Button';
import { FaRegMoon } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';

const ThemeButton: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>{isDark ? <CiSun /> : <FaRegMoon />}</Button>;
};

export default ThemeButton;
