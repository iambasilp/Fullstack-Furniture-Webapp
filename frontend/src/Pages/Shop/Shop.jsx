import React from 'react'
import Hero from '../../Components/Private/Hero/Hero'
import Popular from '../../Components/Private/Popular/Popular'
import Offers from '../../Components/Private/Offers/Offers'
import NewCollections from '../../Components/Private/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers/>
      <NewCollections />
    </div>
  )
}

export default Shop
