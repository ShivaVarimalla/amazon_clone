import React, { useEffect, useState } from 'react'
import './Products.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Link } from 'react-router-dom';


const Products=({})=> {
  const [Products, setProducts] = useState([]);
  useEffect(async ()=>{
    let Product = await fetch("https://fakestoreapi.com/products")
    Product = await Product.json()
    const filteredArr = Product.reduce((previous, current) => {
      const x = previous.find(item => item.category === current.category);
      if (!x) {
        return previous.concat([current]);
      } else {
        return previous;
      }
    },[]);
      setProducts(()=>{
        return [...filteredArr]
      })
  },[])
  let productsData =  Products.map((item,index)=>{
    //console.log(item.category)
    return(
        <Col key={`${index}product`}  xs={{ span: 24}} lg={{ span: 8}}>
          <div className="card">
              <h1 className="text">{item.category}</h1>
              <Link to={`productList/${item.category}`}><img className="image-box" src={item.image}/></Link>
         </div>
        </Col>  
  )})

  return (
    <div className='product'>
      <Row gutter={[48, 40]}>
           {productsData}
      </Row>
    </div>
  );
}
export default Products;