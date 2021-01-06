import React, { useEffect, useState } from 'react'
import './SingleProduct.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';

const SingleProduct=(props)=> {
  const[single, setsingle] = useState([])
  useEffect(async ()=>{
    console.log(props.match.params.id)
    let single_product = await fetch("https://fakestoreapi.com/products")
    single_product = await single_product.json()
    let single_one = []
    let id = props.match.params.id
    for(let i=0; i<single_product.length; i++){
      if(single_product[i].id == id){
        single_one.push(single_product[i])
      }
    }
    setsingle(()=>{
      return [...single_one]
    })
  },[])
 
  let product_details = single.map((value, index)=>{
    return(
      <Col xs={{ span: 24}} lg={{ span: 8 }}>
        <div className="single_card">
            <img className="image-image" src={value.image}/>
              <div className="text_card">
                <h2 className="text">{value.category}</h2>
                <h2 className="text">{value.title}</h2>
                <h3 className="text">${value.price}</h3>
                <p className="description">{value.description}</p>
                <Button type="primary">Add To Cart</Button>
              </div>
        </div>
     </Col>  
    )
  })
  return (
    <div className="productlist">
      <Row gutter={[48, 40]}>
         {product_details}
      </Row>
    </div>
  );
}

export default SingleProduct;