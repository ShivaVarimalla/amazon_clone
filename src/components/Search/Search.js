 import './Search.css'
 import React, { useEffect, useState } from "react"
 import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Link } from 'react-router-dom';

const Search=(props)=>{
    const[search,setsearch] = useState([])
    useEffect(async ()=>{
        //console.log(props.match.params.value)
        let item_search = await fetch("https://fakestoreapi.com/products")
        item_search = await item_search.json()
        let search_item = []
        let item = props.match.params.value;
        for(let i=0; i<item_search.length; i++){
            console.log(item_search[i].title.indexOf(item))
            if(item_search[i].title.indexOf(item)!=-1){
                search_item.push(item_search[i])
            }
        }
        setsearch(()=>{
            return [...search_item]
        })
    },[])
   
   let search_products = search.map((item,index)=>{
        return(
            <Col key={`${index}search`}  xs={{ span: 24}} lg={{ span: 8}}>
              <div className="card">
                  <h4 className="text">{item.title}</h4>
                  <Link to="/ProductList"><img className="image-box" src={item.image}/></Link>
                  <h3 className="text">${item.price}</h3>
             </div>
            </Col>  
      )})
return(
    <div className="product">
        <Row gutter={[48, 40]}>
        {search_products}
        </Row>
    </div>
)
}
export default Search;