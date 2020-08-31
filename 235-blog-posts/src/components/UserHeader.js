import React from "react";

import { connect } from 'react-redux';
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users
      .find((user) => user.id === this.props.userId);
    if (!user) return null; // or <div>loading...</div>
    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state.posts defined in combineReducers
  return {
    users: state.users
  }
};

export default connect(
  mapStateToProps,
  { fetchUser }
  )(UserHeader);