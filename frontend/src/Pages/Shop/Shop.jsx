import React from 'react'
import Home from '../../Components/Private/Home/Home'
import Popular from '../../Components/Private/Popular/Popular'
import Offers from '../../Components/Private/Offers/Offers'
import NewCollections from '../../Components/Private/NewCollections/NewCollections'
import NewsLetter from '../../Components/Private/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Home/>
      <Popular />
      <Offers/>
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
