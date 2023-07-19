import React from 'react';
import { HashRouter } from 'react-router-dom';

import RoutesConfig from './Routes/RoutesConfig';
import Header from './pages/Header/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <RoutesConfig />
    </HashRouter>
  );
}

export default App;
