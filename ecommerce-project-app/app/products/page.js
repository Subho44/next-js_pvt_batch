import Link from 'next/link';
import React from 'react'

async function getproducts() {
    const res = await fetch("http://localhost:3000/api/products",{
        cache:"no-store",
    });
    return res.json();
    
}

const Productspage = async() => {
    const products = await getproducts();
  return <>
  <div>
  <h1>All PRODUCTS</h1>
  {products.map(x=>(
    <div key={x.id}>
     <h2>{x.name}</h2>
      <h2>Price: ₹{x.price}</h2>
     <p>description:{x.description}</p>
     <Link href={`/products/${x.id}`}>
     View Details
     </Link>
    </div>    
  ))}

  </div>
  
  
  </>
}

export default Productspage