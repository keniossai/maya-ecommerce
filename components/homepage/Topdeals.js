import React from 'react'
import styled from 'styled-components'
import PopularCategory from './PopularCategory'


function Topdeals (){

    return(
        <DealContainer>
            <DealOption>
                <FreeDelivery>
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131724/contentservice/konga.%20prime%20copy2.0.png_ryVqJTAw_.png" alt="" />
                    </a>
                </FreeDelivery>
                <FreeDelivery>
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131733/contentservice/offline%20stores2.0.png_Hy851T0vu.png" alt="" />
                    </a>
                </FreeDelivery>
                <FreeDelivery>
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/brand%20stores2.0.png_SJH91TCvu.png" alt="" />
                    </a>
                </FreeDelivery>
                <FreeDelivery>
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/brand%20stores2.0.png_SJH91TCvu.png" alt="" />
                    </a>
                </FreeDelivery>
            </DealOption>
            <DealAds>
                <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658837622/contentservice/web.jpg_SyhdqIa2q.jpg" alt="" />
                </a>
            </DealAds>
            <PopularCategory />
        </DealContainer>
    )
}

export default Topdeals


const DealContainer = styled.section`

    @media screen and (max-width: 768px){
        margin: 0 1.25rem 1.25rem;
    }


`

const DealOption = styled.section`
    display: flex;
    align-items: center;
    -webkit-box-align: center;

    @media screen and (max-width: 768px){
        margin-bottom: 1.25rem;

        display: none;
    }
`

const FreeDelivery = styled.span`
    background: #fff;
    border: .0625rem solid rgba(0,0,0,.05);
    border-radius: .3125rem;
    box-shadow: 0 0 .5rem rgba(0,0,0,.05);
    height: 3.5rem;
    margin-right: .9375rem;
    padding: .8125rem 1.5625rem;
    width: calc(30.66667% - .9375rem);

    a{
        color: inherit;
        cursor: pointer;
        text-decoration: inherit;  
        
        img{
            text-indent: -624.9375rem;
            height: auto;
            max-width: 100%;
            padding: 0 45px;
        }
    }
`
const DealAds = styled.div`
    background-color: #fff;
    border-radius: .3125rem;
    box-shadow: 0 0 .3125rem rgba(0,0,0,.05);
    min-height: 6.25rem;
    padding: .625rem;
    margin: 10px 16px 16px auto;

    @media screen and (max-width: 768px){
        display: none;
    }
    

    img{
        border-radius: .3125rem;
        height: 100%;
        max-height: 6.25rem;
        width: 100%;
    }
`