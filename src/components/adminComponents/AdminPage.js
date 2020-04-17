import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import AdminMenu from "./AdminMenu";

class AdminPage extends Component {
  render() {
    return (
      <div>
        {!this.props.user.jwt ? <LoginFormContainer /> : <AdminMenu />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);

  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(AdminPage);
