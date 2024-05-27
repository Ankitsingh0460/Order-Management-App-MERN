
import React from 'react'

function Items({ itemsId, itemsName, itemsPrice, itemsModification }) {
  return (

    <div className='itemdiv'>
      <div className='items'>{itemsId}</div>
      <div className='items'>{itemsName}</div>
      <div className='items'>{itemsPrice}</div>
      <div className='items'>{itemsModification}</div>
      <button className='btns'>Edit</button>
    </div>

  )
}

export default Items



