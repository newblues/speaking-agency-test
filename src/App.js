import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/nav/nav';
import HomePage from './pages/home/home';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <HomePage />
    </div>
  );
};

export default App;
