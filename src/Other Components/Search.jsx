import '../Css/Search.scss';
import { useGlobalContext } from '../Context';
import { useRef } from 'react';
const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');
  const handleChange = () => {
    rchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-container" onSubmit={handleSubmit}>
        <label className="search-text">Search your item</label>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          ref={searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
