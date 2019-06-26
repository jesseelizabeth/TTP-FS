import React from 'react';

import { Navbar } from './components';
import { Login, Signup } from './components/Auth';
// import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      {/* <Routes /> */}
    </div>
  );
};

export default App;
