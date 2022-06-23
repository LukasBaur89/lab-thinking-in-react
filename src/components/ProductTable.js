import ProductRow from './ProductRow';

function ProductTable({ products }) {
  const electronicGoods = products.filter(
    (el) => el.category === 'Electronics'
  );
  const sportingGoods = products.filter(
    (el) => el.category === 'Sporting Goods'
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="productRow">
        {electronicGoods.length > 0 && (
          <>
            <th>{electronicGoods[0].category}</th>
            {electronicGoods.map((product) => {
              return (
                <ProductRow key={product.id} product={product}></ProductRow>
              );
            })}
          </>
        )}
        {sportingGoods.length > 0 && (
          <>
            <th>{sportingGoods[0].category}</th>
            {sportingGoods.map((product) => {
              return (
                <ProductRow key={product.id} product={product}></ProductRow>
              );
            })}
          </>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
