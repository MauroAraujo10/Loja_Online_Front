import React from 'react';
import { HashRouter } from 'react-router-dom';

import RoutesConfig from './Routes/RoutesConfig';

function App() {
  return (
    <HashRouter>
      <RoutesConfig />
    </HashRouter>
  );
}

export default App;
