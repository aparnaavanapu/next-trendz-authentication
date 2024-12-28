import Header from '../Header'
import './index.css'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

const Cart = () => {
  if (Cookies.get('jwt_token')===undefined){
    return <Navigate to="/login" replace />
  }
  return(
    
    <div>
      <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
    </div>
    </div>
  
  )
}

export default Cart