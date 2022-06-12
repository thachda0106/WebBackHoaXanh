import React from 'react'
import { useParams } from 'react-router-dom'
const OrderDetail = () => {
    let {orderID} = useParams()
  return (
    <div>
      orderDetail #{orderID}
    </div>
  )
}

export default OrderDetail
