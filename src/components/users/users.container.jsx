import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { fetchUsers, getUserDetails } from '../../redux/actions/index';

import { FaPhone, FaEnvelope } from 'react-icons/fa';

import Loader from '../loader/loader';
import UsersComponent from './users.component';
import Avatar from '../avatar/avatar';

import './users.container.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  renderUsersList = () => {
    const { users, pending, error, getUserDetails, search } = this.props;

    if (pending) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>Something went wrong with API server</p>
        </div>
      );
    }

    if (!pending && !!users) {
      return users
        .sort((a, b) =>
          a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1
        )
        .filter(users => {
          return (
            users.first_name.toLowerCase().search(search.toLowerCase()) !== -1
          );
        })
        .map((user, i) => (
          <UsersComponent
            key={i}
            user={user}
            userDetailsCallBack={() => {
              getUserDetails(user);
              this.toggle();
            }}
          />
        ));
    }
  };

  render() {
    const { userSelected } = this.props;

    const closeBtn = (
      <button className='close' onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Container>
          <Row className='row-container'>{this.renderUsersList()}</Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            toggle={this.toggle}
            close={closeBtn}
            className='d-flex align-items-center modal-title'
          >
            <Avatar name={userSelected.first_name} />
            <div className='ml-3'>
              {userSelected.first_name} {userSelected.last_name}{' '}
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='d-flex align-items-center'>
              <FaPhone className='mr-3' />
              <p>{userSelected.phone_number}</p>
            </div>
            <div className='d-flex align-items-center'>
              {' '}
              <FaEnvelope className='mr-3' />
              <p>{userSelected.email}</p>
            </div>
            <hr></hr>
            <div className='d-flex align-items-center'>
              {' '}
              <p className='sub-title'>Country: </p>
              <p>{userSelected.country}</p>
            </div>
            <div className='d-flex align-items-center'>
              {' '}
              <p className='sub-title'>City: </p>
              <p> {userSelected.city}</p>
            </div>
            <hr></hr>
            <div className='d-flex align-items-center'>
              {' '}
              <p className='sub-title'>Job: </p>
              <p> {userSelected.job} </p>
            </div>
            <div className='d-flex align-items-center'>
              {' '}
              <p className='sub-title'>Driving license: </p>
              <p> {userSelected.driving_license} </p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    pending: state.users.pending,
    error: state.users.error,
    userSelected: state.users.userSelected,
    search: state.users.search
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchUsers,
      getUserDetails
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
