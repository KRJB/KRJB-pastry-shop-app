import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import OrderItem from '../components/Admin/OrderItem';
import { getOrders } from '../JS/actions/orderActions';
import { getUsers } from '../JS/actions/userActions';
import Footer from '../components/Footer';


const Orders = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.orderReducer.loading)
  const orders = useSelector((state) => state.orderReducer.orders);
  useEffect(()=>{
    dispatch(getOrders())
  },[dispatch])

  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])


  return (
    <div>
       <Navbar/>
       {loading?(<h1>loading...</h1>)
       : (
          <>
            {orders.map((item) => (
              <OrderItem
              item={item}
              key={item._id}
              />
              )
              
              )}

            </>
            )}
                 <Footer/>

       </div>
    )
}
export default Orders