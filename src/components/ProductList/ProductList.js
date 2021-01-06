import React, { useEffect, useState } from 'react'
import './ProductList.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Link } from 'react-router-dom';


const ProductList=(props)=> {
  const[list, setlist] = useState([])
  useEffect(async ()=>{
    let items_list = await fetch("https://fakestoreapi.com/products");
    items_list = await items_list.json();
   let similar_products = []
    let category = props.match.params.category;
    for(let i=0; i<items_list.length; i++){
      if(items_list[i].category == category){
        similar_products.push(items_list[i])
      }
    }
    setlist(()=>{
      return [...similar_products]
    })
  },[])
  let list_item = list.map((product,index)=>{
    return(
      <Col xs={{ span: 24}} lg={{ span: 8 }}>
        <div className="productlist_card">
            <h2 className="title_text">{product.title}</h2>
            <Link to={`/SingleProduct/${product.id}`}><img className="image-box" src={product.image}/></Link>
            <h2>${product.price}</h2>
      </div>
     </Col>  
    )
  })
  return (
    <div className="productlist">
      <Row gutter={[48, 40]}>
         {list_item}
      </Row>
    </div>
  );
}

export default ProductList;