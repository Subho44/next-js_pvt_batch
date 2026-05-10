import Link from 'next/link';
import React from 'react'

async function getproducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();

}

const Productspage = async () => {
  const products = await getproducts();
  return <>
    <div className='min-h-screen px-6 py-10'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-8 text-3xl font-bold text-slate-900'>All PRODUCTS</h1>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {products.map(x => (
          <div key={x.id} className='overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl p-5'>
            <h2 className='mb-2 text-xl font-bold text-slate-900'>{x.name}</h2>
            <p className='mb-4 text-lg font-semibold text-blue-600'>Price: ₹{x.price}</p>
            <p className='mb-2 text-lg font-semibold text-slate-600'>description:{x.description}</p>
            <Link href={`/products/${x.id}`}
             className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
            >
              View Details
            </Link>
          </div>
        ))}
        </div>
       
      </div>


    </div>


  </>
}

export default Productspage