import React from "react";

export default function LoginForm (props) {
    return (
      <div className="box">
        <form id="login" onSubmit={props.onSubmit}>
          <input
            placeholder="name"
            type="text"
            value={props.values.name}
            onChange={props.onChange}
            name="name"
          ></input>
          <input
            placeholder="password"
            type="password"
            value={props.values.password}
            onChange={props.onChange}
            name="password"
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

