import { useState } from "react";
import "../css-components/searchBar.css";

function Underline(props) {
  return <div className="underline" style={{ width: props.width }}></div>;
}

function SearchBar({ getInput }) {
  const [width, setWidth] = useState("0");
  const [input, setInput] = useState();

  function showUnderline() {
    if (width === "0") return setWidth("230px");
    return setWidth("0");
  }

  function getSearch(e) {
    e.preventDefault();
    getInput(input.toLowerCase());
  }

  return (
    <div className="search-bar">
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="SEARCH LOCATION"
          className="search-form"
          onFocus={showUnderline}
          onBlur={showUnderline}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button className="button button-form">
          <span>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#fff" }}
            ></i>
          </span>
        </button>
        <Underline width={width} />
      </form>
    </div>
  );
}

export default SearchBar;
