import React from 'react';
import { getProducts, filterSearch } from "../actions/productActions";

export default function SelectFilter ({setCategoryFilter, dispatch, setCurrentPage}) { 

  const handleFilter = (event) => {
    if (event.target.value === "all") {
      dispatch(getProducts());
      setCategoryFilter("all");
      setCurrentPage(1);
    } else {
      dispatch(filterSearch(event.target.value));
      setCategoryFilter(event.target.value);
      setCurrentPage(1);
    }
  };

  return (
    <span className="filter">
    <label>Filter producten:</label>

    <select id="category" onChange={handleFilter}>
      <option value="all">Alle Producten</option>
      <option value={"Bijtringen & Rammelaars"}>
        {"Bijtringen & Rammelaars"}
      </option>
      <option value="Baby Overige">Baby Overige</option>
      <option value="Knuffels">Knuffels</option>
      <option value="Sleutelhangers">Sleutelhangers</option>
      <option value="Overige">Overige</option>
    </select>
  </span>
  )
}