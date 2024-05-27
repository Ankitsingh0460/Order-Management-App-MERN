import React from 'react'

function Headers() {
  return (
    <div className='Headers'>
      <div className='activesale'>
        <button type="button" class="btn btn-primary">Active Sale Order</button>
      </div>
      <div className='completesale'>
        <button type="button" class="btn btn-success">Complete Sale Order</button>
      </div>
      <div className='saleorder'>
        <button type="button" class="btn btn-info">Sale Order</button>
      </div>
    </div>
  )
}

export default Headers;
