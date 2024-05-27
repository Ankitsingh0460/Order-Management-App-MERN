import React from 'react'
import Items from './Items'

function Item({ data }) {
  return (
    <>
      {data.map((items) => (<Items itemsId={items._id} itemsName={items.customer_name} itemsPrice={items.price} itemsModification={items.lastModification}></Items>))}



    </>
  )
}

export default Item
