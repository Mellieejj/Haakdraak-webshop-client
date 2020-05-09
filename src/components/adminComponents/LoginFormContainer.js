import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/adminActions";
import LoginForm from "./LoginForm";

export default function LogininFormContainer() {
  const initialFields = {
    name: "",
    password: "",
  };

  const [fields, setFields] = useState(initialFields);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(fields));
    setFields(initialFields);
  };

  const onChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="pagina-naam">
        <h2>Login</h2>
      </div>

      <LoginForm onSubmit={onSubmit} onChange={onChange} values={fields} />
    </div>
  );
}
