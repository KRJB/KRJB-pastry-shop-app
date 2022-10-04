import React, { useEffect } from 'react'
import '../styles/products.css'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct } from '../JS/actions/productActions'
import ProductTemplate from '../components/ProductTemplate'
import AddProduct from '../components/Admin/AddProduct'
import ProductTemplateAdmin from '../components/Admin/ProductTemplateAdmin'
import Footer from '../components/Footer'


const Products = () => {
  const dispatch = useDispatch()
  const loadProducts = useSelector((state)=>state.productReducers.loadProducts)
  const products= useSelector((state)=>state.productReducers.products)
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])


 

  const {isAuth,user} = useSelector(state => state.authreducer);

  return (
    <div>
        
      <Navbar/>
  {isAuth && user.isAdmin ?
          <div className='products'>
          {loadProducts?(<h1>loading...</h1>)
          
          :products.length ===0
          ?(<h2>there is no product</h2>)
          :(products.map((el)=><ProductTemplateAdmin key={el._id} products={el}/>))       
          }
            <AddProduct/>    
          </div>
  :   <div className='products'>
        {loadProducts?(<h1>loading...</h1>)

        :products.length ===0
        ?(<h2>there is no product</h2>)
        :(products.map((el)=><ProductTemplate key={el._id} products={el}/>))
        }
          </div>}
          <Footer/>
    </div>
  )
}

export default Products