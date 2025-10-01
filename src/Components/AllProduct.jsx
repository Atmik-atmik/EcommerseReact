import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';


const AllProduct = () => {
  const [product, setProduct] = useState([]);
    const navigate = useNavigate();

  const getProduct = async()=>{
    
    const products = await fetch(`https://dummyjson.com/products`) //returns promise
    const jsonData = await products.json();
    console.log(jsonData);
    setProduct(jsonData.products);
    
  }
  console.log(product);
         

  useEffect(()=>{
    getProduct()
  },[])

  const getProductId = (item)=>{
    navigate(`/all-product/${item.id}`)
  }


  return (
    <div>
      
      <div>
        <h1 className='heading'>Product Details Shop Now!</h1>
        <Breadcrumb/>
      </div>
      <div className='home-container'>
        {product?.map((item,index,arr)=>{
          return(
            <div className='home-card'  onClick={()=> getProductId(item)}>
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

export default AllProduct
