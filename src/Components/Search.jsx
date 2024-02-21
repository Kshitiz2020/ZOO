import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setSearchParams({
      name: e.target.value,
    });
  };

  return (
    <div>
      <input
        className="searchBox"
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
    </div>
  );
}
export default Search;
