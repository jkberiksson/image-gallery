import { useState } from 'react';

import themes from './styles/Theme';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [gridVisible, setGridVisible] = useState(true);

  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Header
          theme={theme}
          setTheme={setTheme}
          gridVisible={gridVisible}
          setGridVisible={setGridVisible}
        />
        <Home gridVisible={gridVisible} setGridVisible={setGridVisible} />
      </ThemeProvider>
    </div>
  );
};

export default App;
