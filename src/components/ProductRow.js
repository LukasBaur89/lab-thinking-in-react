function ProductRow({ product }) {
  return (
    <tr key={product.id} className={product.inStock ? 'inStock' : 'outOfStock'}>
      <td className="name">{product.name}</td>
      <td className="price">{product.price}</td>
    </tr>
  );
}

export default ProductRow;
