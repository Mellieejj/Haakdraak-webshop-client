import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/adminActions";
import LoginForm from "./LoginForm";

class LogininFormContainer extends Component {
  state = {
    name: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      name: "",
      password: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="pagina-naam">
          <h2>Login</h2>
        </div>

        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { login })(LogininFormContainer);
