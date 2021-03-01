import React from 'react';
//Components and pages
import Home from './pages/Home';
import Globalstyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Globalstyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
