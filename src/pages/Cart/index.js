import React, {useContext} from 'react'
import Context from '../../constants/Context'
function Cart() {
  const [ state, dispatch] = useContext(Context)
  console.log(state)
  return (
    <div>
      <div className="w-full h-72 bg-red-400">container cart</div>
    </div>
  )
}

export default Cart
