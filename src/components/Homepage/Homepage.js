import React from 'react'
import './Homepage.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'; 
import Products from '../Products/Products';


const Homepage=({})=> {

  return (
    <div className="Homepage">
      <marquee className="scroll">Available Products are shown below with offers. U can shop now.</marquee>
          <Carousel dotPosition='bottom' autoplay>
            <div className="content">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_1500x600_2._CB406394555_.jpg" width="100%" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_3000x1200_2._CB406394554_.jpg"/>
            </div>
            <div className="content">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" width="100%" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"/>
            </div>
            <div className="content">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OP43/V239389280_IN_HETV_OnePlus_LatestNMLandingpage_43y1_GW_PC_1500x600_1._CB404409311_.jpg" width="100%" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OP43/V239389280_IN_HETV_OnePlus_LatestNMLandingpage_43y1_GW_PC_3000x1200_1._CB404409311_.jpg"/>
            </div>
            <div className="content">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_1500x600_2._CB406394555_.jpg"  width="100%" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_3000x1200_2._CB406394554_.jpg"/>
            </div>
          </Carousel>
          <Products/>
    </div>
  );
}

export default Homepage;