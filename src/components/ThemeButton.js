import { Moon, Sun } from 'react-feather';
import { Button } from '../styles/ButtonStyles';

const ThemeButton = ({ theme, setTheme }) => {
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Button onClick={changeTheme} mode={theme}>
      {theme === 'dark' ? <Sun size={'1.8rem'} /> : <Moon size={'1.8rem'} />}
    </Button>
  );
};

export default ThemeButton;
