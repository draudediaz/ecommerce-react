import React from 'react'
import { useState, useEffect } from 'react'
import "./ProductList.scss"

export const ProductList = () => {
    const [data, setData] = useState ([])
        useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then ((response) => response.json())
        .then ((responseData)=>{setData(responseData)})
        .catch((error)=>{
            console.error("Error al obtener los datos", error)
        })
    },[])
  return (
            <div className='productContainer'>   
                {data && data.products && data.products.map(item => (
                <div className='productCard' key={item.id}>
                    <h3 className='productTitle'><a href={`/product?id=${item.id}`}>{item.title}</a></h3>
                    <img className='imageProduct' src={item.thumbnail} alt="" />
                    <h3 className='productPrice'>{item.price}</h3>
                    <p className='productDescription'>{item.description}</p>
                </div>
            ))
            }
            </div>
  )
}

