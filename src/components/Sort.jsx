import { React, useContext, useState } from "react";
import { DataContext } from "../assets/context/Products_context";

const Sort = () => {
  const { state, dispatch } = useContext(DataContext);

  const updateSort = (e) => {
    dispatch({ type: "UPDATE SORT", sorting: e.target.value });
  };

  return (
    <form className="py-2">
      <label htmlFor="sort" className="text-xl font-medium px-2">
        Sort By
      </label>
      <select
        name="sort"
        id="sort"
        className="sort-input p-5 text-xl font-medium "
        value={state.sort}
        onChange={updateSort}
      >
        <option value="price-highest">price (highest)</option>
        <option value="price-lowest">price (lowest)</option>
        <option value="name-a">price (a-z)</option>
        <option value="name-z">price (z-a)</option>
      </select>
    </form>
  );
};

export default Sort;
