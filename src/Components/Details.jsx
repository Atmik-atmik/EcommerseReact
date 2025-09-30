import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Details = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async()=>{
    const products = await fetch(`https://dummyjson.com/products`) //returns promise
    const jsonData = await products.json();
    console.log(jsonData);
    
  }
  console.log(product);
         
  useEffect(()=>{
    getProduct()
  },[])

  

  return (
    <div>
      <div>
        <h1 className='heading'>Product Details. Shop Now!</h1>
      </div>
      <div className='home-container'>
        {product?.map((item,index,arr)=>{
          return(
            <div className='home-card'>
              <img src= {item.thumbnail}/>
              <p>Category: {item.category} </p>
              <p>Brand: {item.brand} </p>
            </div>
          )
        })}
      </div>
     
    </div>
  )
}

export default Details
