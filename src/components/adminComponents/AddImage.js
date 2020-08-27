import React from "react";

export default function AddImage({onSubmit, onChange, values}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className=""
        type="url"
        placeholder="Foto url"
        name="url"
        value={values.url}
        onChange={onChange}
      />
      <select
        name="thumbnail"
        value={values.thumbnail}
        onChange={onChange}
      >
        <option value="">Thumbnail ?</option>
        <option value={true}>Ja</option>
        <option value={false}>Nee</option>
      </select>
      <button className="" type="submit">
        Foto toevoegen
      </button>
    </form>
  );
}
