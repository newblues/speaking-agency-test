import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Users from './components/users/users.container';

const App = () => {
  return (
    <div className='App'>
      <p>Hello world !!</p>
      <Users />
    </div>
  );
};

export default App;
