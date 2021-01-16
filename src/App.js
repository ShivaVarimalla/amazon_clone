import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Navigation from './components/Navigation/Navigation';
import ProductList from './components/ProductList/ProductList';
import SingleProduct from './components/SingleProduct/SingleProduct'
import Search from './components/Search/Search'
import NavMenu from './components/NavMenu/NavMenu';
import { Layout } from 'antd';



const { Header, Sider, Content } = Layout;

const App=()=> {
  const [collapsed, setcollapsed] = useState(true)
   let click = (()=>{
      setcollapsed(!collapsed)
    })
 
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsedWidth={0} collapsible collapsed={collapsed}>
             <NavMenu/>
          </Sider>
          <Layout>
              <Header>
                 <Navigation click={click}/>
              </Header>
              <Content>
                  <Route exact={true} path="/" component={Homepage}/>
                  <Route path="/productlist/:category" component={ProductList}/>
                  <Route path="/singleproduct/:id" component={SingleProduct}/>
                  <Route path="/search/:value" component={Search}/> 
              </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
export default App;
