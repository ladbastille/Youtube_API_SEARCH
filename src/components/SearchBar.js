import { useState } from "react";

const SearchBar = ( {handleFormSubmit} ) => {
  const [query,setQuery] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="form-field">
          <label htmlFor="search">Search Video</label>
          <input
            onChange={handleChange}
            name="search"
            type="text"
            value={query}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
