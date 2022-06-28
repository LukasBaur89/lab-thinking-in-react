function SearchBar({ search, setSearch, checkStock, handleCheckStock }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search a name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <input type="checkbox" value={checkStock} onChange={handleCheckStock} />
        <label htmlFor="checkbox">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
