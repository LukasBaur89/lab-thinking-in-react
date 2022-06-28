import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [checkStock, setCheckStock] = useState(false);

  // Condition to check user input & checkbox
  let searchedProduct = null;
  if (checkStock) {
    searchedProduct = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.inStock
      );
    });
  } else {
    searchedProduct = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  // checkbox
  const handleCheckStock = (e) => {
    setCheckStock(e.target.checked);
  };

  return (
    <div>
      <h1>Ironstore</h1>
      <div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          checkStock={checkStock}
          handleCheckStock={handleCheckStock}
        ></SearchBar>
        <hr />
      </div>
      <div>
        <ProductTable
          products={searchedProduct}
          setProducts={setProducts}
        ></ProductTable>
      </div>
    </div>
  );
}

export default ProductsPage;
