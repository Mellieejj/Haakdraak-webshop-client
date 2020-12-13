import React from "react";

export default function LoginForm ({onSubmit, values, onChange}) {
    return (
      <div className="box">
        <form id="login" onSubmit={onSubmit}>
          <input
            placeholder="name"
            type="text"
            value={values.name}
            onChange={onChange}
            name="name"
          ></input>
          <input
            placeholder="password"
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

