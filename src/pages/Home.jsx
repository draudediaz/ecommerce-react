import React from 'react'
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { ProductList } from '../components/ProductList'

export const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductList />
    </>
  )
}
