import React from "react";

export default function AddImage(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className="form-control form-control-lg custom-form"
        type="url"
        placeholder="Foto url"
        name="url"
        value={props.values.url}
        onChange={props.onChange}
      />
      <select
        name="thumbnail"
        value={props.values.thumbnail}
        onChange={props.onChange}
      >
        <option value="">Thumbnail ?</option>
        <option value={true}>Ja</option>
        <option value={false}>Nee</option>
      </select>
      <button className="btn btn-outline-default btn-lg btn-dark" type="submit">
        Foto toevoegen
      </button>
    </form>
  );
}
