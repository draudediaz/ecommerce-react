import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import "./SingleProduct.scss"

export const SingleProduct = () => {
    const location = useLocation();
    const params = queryString.parse(location.search);
    const id = params.id
    const urlFetch = `https://dummyjson.com/products/${id}`
    const [dataProduct, setdataProduct] = useState(null)
    useEffect(()=> {
        fetch(urlFetch)
            .then ((response) => response.json())
            .then ((responseData)=>{setdataProduct (responseData)})
            .catch((error)=>{
                console.error("Error al obtener los datos", error)
            })
    }, [])
    console.log(dataProduct)
  return (
    dataProduct ? (
    <section className='productMain'>
                <div className='photoCaseMain'>
                    <h2 className='titleMainProduct'>{dataProduct.title}</h2>
                    <img src={dataProduct.thumbnail} className='photoProductMain'/>
                    <div className='galleryProduct'>
                        <img src={dataProduct.images[0]}/>
                        <img src={dataProduct.images[1]}/>
                        <img src={dataProduct.images[2]}/>
                    </div>
                </div>
                <div className='dataProductMain'>
                    <p className='descriptionProductMain'>{dataProduct.description}</p>
                    <h3 className='priceProductMain'>{dataProduct.price}€</h3>
                </div>
    </section>) : (
        <div>Loading...</div>
    )
  )
}
