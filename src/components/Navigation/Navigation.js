import React, { useState } from 'react'
import './Navigation.css';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import {ShoppingCartOutlined} from '@ant-design/icons'

const { Header } = Layout;

const Navigation=(props)=> {
   const [items, setitems] = useState('')
   const [redirect, setredirect] = useState(false)
   const enter =()=>{
    setredirect(true)
   }
   let handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      enter()
    }
  }
  if(redirect){
    return <Redirect to= {`/search/${items}`}/>
  }
  return (
  <div className="nav">
    <Layout className="layout">
        <Header className="header">
              <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                   <MenuOutlined className="menu"  onClick={props.click} />
                    <Link to="/"><img className="header-logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                      alt=""/></Link>
                      <a href="/ref=nav_logo" id="nav-logo-sprites" class="nav-logo-link nav-progressive-attribute" aria-label="Amazon">
                                <span class="nav-sprite nav-logo-base"></span>
                                <span id="logo-ext" class="nav-sprite nav-logo-ext nav-progressive-content"></span>
                                <span class="nav-logo-locale">.in</span>
                              </a>
                      <input className="input" type="text" placeholder="Enter Product" value={items} onChange={ e => setitems(e.target.value)} onKeyPress={handleKeyPress}/> 
                        <Tooltip className="search">
                          <Button type="primary" shape="square" onClick={enter} style={{ background: "#f2b90f", borderColor: "yellow" }} icon={<SearchOutlined className="search" />} />
                        </Tooltip>
                        <ShoppingCartOutlined className="cart" />
                </Menu>
        </Header>
    </Layout>
  </div>
  );
}

export default Navigation;