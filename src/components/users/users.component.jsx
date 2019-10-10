import React from 'react';

import Avatar from '../avatar/avatar';

import './users.component.css';

const UsersComponent = ({ user }) => {
  return (
    <div className='container'>
      <Avatar className='avatar' name={user.first_name} />
      <div> {user.first_name}</div>
    </div>
  );
};

export default UsersComponent;
