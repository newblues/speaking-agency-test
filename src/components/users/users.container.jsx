import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../../redux/actions/index';

import Loader from '../loader/loader';
import UsersComponent from './users.component';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  renderUsersList = () => {
    const { users, pending, error } = this.props;

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
      return users.map((user, i) => <UsersComponent key={i} user={user} />);
    }
  };

  render() {
    return <>{this.renderUsersList()}</>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    pending: state.users.pending,
    error: state.users.error
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchUsers
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
