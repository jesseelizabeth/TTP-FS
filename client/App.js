import React from 'react';

import { Navbar } from './components';
import Login from './components/Login';
// import Routes from './Routes';

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Navbar />
      <Login />
      {/* <Routes /> */}
    </div>
  );
};

export default App;
