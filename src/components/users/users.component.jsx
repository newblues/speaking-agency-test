import React from 'react';
import { Col } from 'reactstrap';

import Avatar from '../avatar/avatar';
import { FaTrashAlt } from 'react-icons/fa';

import './users.component.css';

const UsersComponent = ({ user, userDetailsCallBack, deleteUserCallBack }) => {
  return (
    <div className='row-container'>
      <Col
        xs='3'
        className='d-flex justify-content-start align-items-center'
        onClick={() => userDetailsCallBack(user)}
      >
        <Avatar className='avatar' name={user.first_name} />
      </Col>
      <Col
        xs='4'
        className='d-flex justify-content-start align-items-center '
        onClick={() => userDetailsCallBack(user)}
      >
        {user.first_name} {user.last_name}
      </Col>
      <Col
        xs='4'
        className='d-flex justify-content-around align-items-center '
        onClick={() => userDetailsCallBack(user)}
      >
        {user.phone_number}
      </Col>
      <Col xs='1' className='d-flex justify-content-around align-items-center '>
        <FaTrashAlt className='icon' onClick={() => deleteUserCallBack(user)} />
      </Col>
    </div>
  );
};

export default UsersComponent;
