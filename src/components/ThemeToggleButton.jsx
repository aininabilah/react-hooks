import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-150 dark:bg-gray-900 rounded">
    </button>
  );
};

export default ThemeToggleButton;
