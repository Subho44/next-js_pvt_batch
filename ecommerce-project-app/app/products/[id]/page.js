async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>Price: ₹{product.price}</h2>
      <p>description: {product.description}</p>
    </div>
  );
}