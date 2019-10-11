import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { fetchUsers, getUserDetails } from '../../redux/actions/index';

import Loader from '../loader/loader';
import UsersComponent from './users.component';

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
    const { users, pending, error, getUserDetails } = this.props;

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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {userSelected.first_name}{' '}
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md={12}></Col>
            </Row>
            <Row>
              <Col md={12}> </Col>
            </Row>
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
    userSelected: state.users.userSelected
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
