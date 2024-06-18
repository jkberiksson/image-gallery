import ThemeButton from './ThemeButton';
import LayoutButton from './LayoutButton';

import { StyledHeader } from '../styles/HeaderStyles';

const Header = ({ theme, setTheme, gridVisible, setGridVisible }) => {
  return (
    <StyledHeader>
      <ThemeButton theme={theme} setTheme={setTheme} />
      <LayoutButton gridVisible={gridVisible} setGridVisible={setGridVisible} />
    </StyledHeader>
  );
};

export default Header;
