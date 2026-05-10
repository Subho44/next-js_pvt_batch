
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const hc = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    router.push("/admin/products");
  }

  return <>
    <div className='min-h-screen px-6 py-10'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='mb-8 text-3xl font-bold text-slate-900'>Add new Product</h1>
        <form onSubmit={hs} className='rounded-2xl bg-white p-8 shadow-xl'>
          
          product name:
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={hc}
            className='mb-5 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
            required
          />
          <br />
          product price:
          <input
            type='number'
            name='price'
            value={product.price}
            onChange={hc}
            className='mb-5 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
            required
          />
          <br />
          product description:
          <textarea
            name='description'
            value={product.description}
            onChange={hc}
            className='mb-5 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500'
            required
          />
          <br />
          <button type='submit'  className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>Add Product</button>


        </form>
      </div>
    </div>



  </>
}

export default page