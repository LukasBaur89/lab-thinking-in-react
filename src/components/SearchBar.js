function SearchBar({ search, setSearch }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search a name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
