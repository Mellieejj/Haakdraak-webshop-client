import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";

class AdminPage extends Component {
  render() {
    return <div>{!this.props.user.jwt ? <LoginFormContainer /> : `Je bent ingelogd, ${this.props.user.name}`}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AdminPage);
