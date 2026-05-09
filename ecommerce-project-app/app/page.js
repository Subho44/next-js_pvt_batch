import Link from "next/link"

const Homepage = () => {

  return <>
  <div>
    <h1>Ecommerce website</h1>
    <Link href="/products">View Product</Link>
    <Link href="/admin/products">Admin Panel</Link>
  </div>
  </>
}

export default Homepage