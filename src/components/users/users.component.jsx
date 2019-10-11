import React from 'react';
import { Col } from 'reactstrap';

import Avatar from '../avatar/avatar';

import './users.component.css';

const UsersComponent = ({ user }) => {
  return (
    <div className='container'>
      <Col xs='2' className='d-flex justify-content-start align-items-center'>
        <Avatar className='avatar' name={user.first_name} />
      </Col>
      <Col xs='5'>
        {user.first_name} {user.last_name}
      </Col>
      <Col xs='5'>{user.phone_number}</Col>
    </div>
  );
};

export default UsersComponent;
