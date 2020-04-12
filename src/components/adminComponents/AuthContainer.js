import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import OrdersContainer from "./OrdersContainer";

class AdminPage extends Component {
  render() {
    return (
      <div>
        {!this.props.user.jwt ? <LoginFormContainer /> : <OrdersContainer />}
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
