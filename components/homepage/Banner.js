import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Banner extends Component {
  render(){
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
      };
    return (
        <MainAdvertise>
            <MainBanner>
                <DivSlide>
                <Slider {...settings} className="slickSlider">
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658922695/contentservice/Intel-Untitled-12-copy.jpg_By10LiR29.jpg" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653050109/contentservice/Bannner.png_rJNZjWrv5.png" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658928166/contentservice/sunilever.jpg_Hy0722C3c.jpg" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1657190811/contentservice/GOL-KONGA-BANNERS-1253-x-500.jpg_BymiF4Vo5.jpg" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658588435/contentservice/Asset%201.jpg_H15zpKth5.jpg" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658913780/contentservice/intelpc-1.jpg_By2g4tRh9.jpg" alt="" />
                    </a>
                </Slider>
                </DivSlide>
            </MainBanner>
        </MainAdvertise>
      )
  }
}

export default Banner

const MainAdvertise = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`

const MainBanner = styled.div`
    width: 100%;
    padding: 0 15px 16px;

    @media screen and (max-width: 768px){
        height: 100%;
    } 
`

const DivSlide = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;

    @media screen and (max-width: 768px){
        
    }


    .slick-slider{
        position: relative;
        display: block;
    }

    .slick-prev{
        display: block;
        z-index: 10;
        left: 0;
        padding: 0;
        position: absolute;
        width: 30px;
        height: 50px;
        /* background-color: #000; */
        transform: translateY(-50%);
        cursor: pointer;
        border: none;
        transition: all .4s ease-in-out;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;

        @media screen and (max-width: 768px){
            height: 155px;
        }
    }

    .slick-next{
        right: 0;
        width: 30px;
        height: 50px;
        color: #000;
    }

    .slick-dots{
        display: block;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding-bottom: 13px;
        list-style: none;
        text-align: center;
        position: absolute;
        padding: 0;
        z-index: unset;
    }

`
