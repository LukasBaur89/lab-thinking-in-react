import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  // Condition to check user input
  let searchedProduct = null;
  if (search !== '') {
    searchedProduct = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    searchedProduct = products;
  }

  return (
    <div>
      <h1>Ironstore</h1>
      <div>
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
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
