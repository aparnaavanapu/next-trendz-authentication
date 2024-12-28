import Header from '../Header'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

import './index.css'

const Products = () => {
    const jwtToken = Cookies.get('jwt_token')
      
      if (jwtToken === undefined) {
        return <Navigate to="/login" replace />
      }

  return(
    <div>
        <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
    </div>
  
)
}

export default Products