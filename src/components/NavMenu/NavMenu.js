import React, { useState } from 'react'
import './NavMenu.css'
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const NavMenu =( props)=> {
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
          <Sider>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <input className="input" type="text" placeholder="Enter Product" value={items} onChange={ e => setitems(e.target.value)} onKeyPress={handleKeyPress}/> 
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
      );
    }
  
  export default NavMenu
 