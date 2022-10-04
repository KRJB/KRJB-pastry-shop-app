import React, { useEffect } from 'react'
import {Button, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../../styles/cart.css'
import '../../styles/products.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { deleteProduct, getProduct } from '../../JS/actions/productActions';


const ProductTemplateAdmin = ({products}) => {
  useEffect(()=>{
    AOS.init({duration:1000})
      },[])
 

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct())
  };


  return (
    <div className='product-card' data-aos='flip-right'>
        <Card style={{ width: '15rem', minHeight:'420px' }}>
          <Card.Img variant="top" src={products.image} style={{maxHeight:'250px'}} />
          <Card.Body >
            <Card.Title>{products.name}</Card.Title>
            <Card.Text>{products.price} DT/100g</Card.Text>
          </Card.Body>
          <Button id='delete'   onClick={(e) => deleteHandler(products._id,e.target.value)}>      
            delete
          </Button>
          
        </Card>
  </div>
  )
}

export default ProductTemplateAdmin