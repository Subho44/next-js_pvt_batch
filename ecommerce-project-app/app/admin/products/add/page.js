
"use client";

import {useState} from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [product,setProduct] = useState({
    name:"",
    price:"",
    description:"",
  });

  const hc = (e)=>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async(e)=>{
    e.preventDefault();

    await fetch("/api/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(product),
    });
    router.push("/admin/products");
  }

  return <>
  <h1>Add new Product</h1>
 <form onSubmit={hs}>

  product name: 
  <input
   type='text'
   name='name'
   value={product.name}
   onChange={hc}
   required 
  />
  <br/>
   product price: 
  <input
   type='number'
   name='price'
   value={product.price}
   onChange={hc}
   required 
  />
  <br/>
   product description: 
  <textarea
   name='description'
   value={product.description}
   onChange={hc}
   required 
  />
  <br/>
  <button type='submit'>Add Product</button>
  
  
  </form>  
  
  
  </>
}

export default page