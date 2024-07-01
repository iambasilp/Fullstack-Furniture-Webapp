import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../../Context/ShopContext'
const ShopCategory = () => {
  const {name} = useContext(ShopContext)
  console.log(name);

  return (
    <div>
      ShopCategory
    </div>
  )
}

export default ShopCategory
