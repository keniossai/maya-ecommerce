import React from 'react'
import Image from 'next/image'
import logo from '../../public/maya.png'
import styled from 'styled-components'

function Footer () {
    return (
      <FooterContainer>
            <TopWrapper>
                <Container>
                        <a href="">
                            <Image className='site-logo' src={logo} alt="" />
                        </a>
                        

                    <SocialContainer>
                        <Email>
                            <EmailIcon>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#DD242B"/>
                            <path d="M28 12H12C10.9 12 10.01 12.9 10.01 14L10 26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14C30 12.9 29.1 12 28 12ZM27.6 16.25L20.53 20.67C20.21 20.87 19.79 20.87 19.47 20.67L12.4 16.25C12.2997 16.1937 12.2119 16.1177 12.1419 16.0265C12.0719 15.9352 12.0211 15.8308 11.9926 15.7194C11.9641 15.608 11.9585 15.4919 11.9762 15.3783C11.9938 15.2647 12.0343 15.1558 12.0953 15.0583C12.1562 14.9608 12.2363 14.8767 12.3307 14.811C12.4251 14.7453 12.5319 14.6995 12.6445 14.6763C12.7571 14.6531 12.8733 14.653 12.986 14.6759C13.0986 14.6989 13.2055 14.7445 13.3 14.81L20 19L26.7 14.81C26.7945 14.7445 26.9014 14.6989 27.014 14.6759C27.1267 14.653 27.2429 14.6531 27.3555 14.6763C27.4681 14.6995 27.5749 14.7453 27.6693 14.811C27.7637 14.8767 27.8438 14.9608 27.9047 15.0583C27.9657 15.1558 28.0062 15.2647 28.0238 15.3783C28.0415 15.4919 28.0359 15.608 28.0074 15.7194C27.9789 15.8308 27.9281 15.9352 27.8581 16.0265C27.7881 16.1177 27.7003 16.1937 27.6 16.25V16.25Z" fill="white"/>
                            </svg>
                            </EmailIcon>
                            <EmailTitle>
                                <h3>Email Support</h3>
                                <a href="" target="_top">help@maya.com</a>
                            </EmailTitle>
                        </Email>
                        <Email>
                            <EmailIcon>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#DD242B"/>
                            <path d="M23.2632 24.1242L24.9488 22.438C25.1758 22.2137 25.4631 22.0601 25.7756 21.996C26.0882 21.9319 26.4126 21.9599 26.7096 22.0766L28.7639 22.8972C29.064 23.019 29.3213 23.227 29.5034 23.495C29.6855 23.7629 29.7843 24.0788 29.7872 24.4027V28.1667C29.7855 28.3871 29.7392 28.6048 29.6511 28.8068C29.563 29.0089 29.435 29.191 29.2747 29.3422C29.1144 29.4934 28.9252 29.6106 28.7184 29.6867C28.5116 29.7628 28.2916 29.7963 28.0716 29.7851C13.6767 28.8893 10.7721 16.6943 10.2228 12.027C10.1973 11.7978 10.2206 11.5658 10.2912 11.3463C10.3617 11.1267 10.4779 10.9246 10.6322 10.7532C10.7864 10.5819 10.9752 10.4451 11.1861 10.352C11.397 10.2588 11.6252 10.2114 11.8557 10.2128H15.4901C15.8145 10.2138 16.1311 10.3118 16.3993 10.4942C16.6675 10.6767 16.875 10.9352 16.9951 11.2366L17.8153 13.2917C17.9359 13.5876 17.9667 13.9125 17.9038 14.2257C17.8409 14.539 17.6871 14.8268 17.4616 15.0532L15.7761 16.7394C15.7761 16.7394 16.7468 23.3112 23.2632 24.1242Z" fill="white"/>
                            </svg>
                            </EmailIcon>
                            <EmailTitle>
                                <h3>Phone Support</h3>
                                <a href="" target="_top">+2349902884673</a>
                            </EmailTitle>
                        </Email>
                        <Email>
                            <EmailIcon>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#DD242B"/>
                            <path d="M26.415 22.382C26.117 22.233 24.656 21.515 24.384 21.415C24.112 21.316 23.914 21.267 23.715 21.565C23.517 21.861 22.948 22.531 22.775 22.729C22.601 22.928 22.428 22.952 22.131 22.804C21.834 22.654 20.876 22.341 19.741 21.329C18.858 20.541 18.261 19.568 18.088 19.27C17.915 18.973 18.069 18.812 18.218 18.664C18.352 18.531 18.515 18.317 18.664 18.144C18.813 17.97 18.862 17.846 18.961 17.647C19.061 17.449 19.011 17.276 18.936 17.127C18.862 16.978 18.268 15.515 18.02 14.92C17.779 14.341 17.534 14.42 17.352 14.41C17.178 14.402 16.98 14.4 16.782 14.4C16.584 14.4 16.262 14.474 15.99 14.772C15.717 15.069 14.95 15.788 14.95 17.251C14.95 18.713 16.014 20.126 16.163 20.325C16.312 20.523 18.258 23.525 21.239 24.812C21.949 25.118 22.502 25.301 22.933 25.437C23.645 25.664 24.293 25.632 24.805 25.555C25.375 25.47 26.563 24.836 26.811 24.142C27.058 23.448 27.058 22.853 26.984 22.729C26.91 22.605 26.712 22.531 26.414 22.382H26.415ZM20.993 29.785H20.989C19.2184 29.7854 17.4804 29.3094 15.957 28.407L15.597 28.193L11.855 29.175L12.854 25.527L12.619 25.153C11.6291 23.5774 11.1053 21.7538 11.108 19.893C11.11 14.443 15.544 10.009 20.997 10.009C23.637 10.009 26.119 11.039 27.985 12.907C28.9054 13.8236 29.6349 14.9136 30.1313 16.1139C30.6277 17.3143 30.8811 18.6011 30.877 19.9C30.875 25.35 26.441 29.785 20.993 29.785V29.785ZM29.405 11.488C28.3032 10.379 26.9922 9.49958 25.5481 8.90084C24.1039 8.3021 22.5553 7.99592 20.992 8.00004C14.438 8.00004 9.102 13.335 9.1 19.892C9.09696 21.9788 9.64437 24.0294 10.687 25.837L9 32L15.304 30.346C17.0479 31.2962 19.0021 31.794 20.988 31.794H20.993C27.547 31.794 32.883 26.459 32.885 19.901C32.8898 18.3383 32.5848 16.7901 31.9874 15.3461C31.3901 13.902 30.5124 12.5907 29.405 11.488" fill="white"/>
                            </svg>
                            </EmailIcon>
                            <EmailTitle>
                                <h3>Whatsapp</h3>
                                <a href="" target="_top">+2349902884673</a>
                            </EmailTitle>
                        </Email>
                        {/* <GetDeal>
                            <DealTitle>
                                <h3>Get Latest Deals</h3>
                                <p>Our best promotions sent to your inbox.</p>
                            </DealTitle>
                        </GetDeal> */}
                    </SocialContainer>
                    <form action="">
                        <input type="email" maxLength="30" placeholder="Email address" require="true"/>
                        <button className="button_submit" type="submit">Subscribe</button>
                    </form>
                </Container>
            </TopWrapper>
            <BottomFooter>
                <div>
                    <BottomFooterContainer>
                        <FooterContent>
                            <LeftContent>
                                <AboutHead>
                                    <a href="">
                                        <h4>About Maya</h4>
                                    </a>
                                    <ul>
                                        <li><a href="">Contact Us</a></li>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">Career</a></li>
                                        <li><a href="">Maya Prime</a></li>
                                        <li><a href="">Terms & Conditions</a></li>
                                    </ul>
                                </AboutHead>
                                <AboutHead>
                                    <a href="">
                                        <h4>Payment</h4>
                                    </a>
                                    <ul>
                                        <li><a href="">Paystack</a></li>
                                        <li><a href="">Mastercard</a></li>
                                        <li><a href="">Verve</a></li>
                                        <li><a href="">Visa</a></li>
                                        <li><a href="">flutterwave</a></li>
                                    </ul>
                                </AboutHead>
                                <AboutHead>
                                    <a href="">
                                        <h4>Buying on Maya</h4>
                                    </a>
                                    <ul>
                                        <li><a href="">Buyer Safty Center</a></li>
                                        <li><a href="">FAQs</a></li>
                                        <li><a href="">Delivery</a></li>
                                        <li><a href="">Our Return Policy</a></li>
                                        <li><a href="">Digital Service</a></li>
                                        <li><a href="">Buy in Bulk</a></li>
                                    </ul>
                                </AboutHead>
                                <AboutHead>
                                    <a href="">
                                        <h4>More Info</h4>
                                    </a>
                                    <ul>
                                        <li><a href="">Site Map</a></li>
                                        <li><a href="">Track My Order</a></li>
                                        <li><a href="">Privacy Policy</a></li>
                                        <li><a href="">Our Return Policy</a></li>
                                    </ul>
                                </AboutHead>
                                <AboutHead>
                                    <a href="">
                                        <h4>Make Money on Maya</h4>
                                    </a>
                                    <ul>
                                        <li><a href="">Sell on Maya</a></li>
                                        <li><a href="">Become a Sale Consultant</a></li>
                                        <li><a href="">Become a Vendor</a></li>
                                    </ul>
                                </AboutHead>
                            </LeftContent>
                            <RightContent>
                                <SocialConnect>
                                    <h4>CONNECT WITH US</h4>
                                    <Connect>
                                        <a href="">
                                            <svg fill="#39579A" height="19px" version="1.1" viewBox="0 0 10 19" width="10px" xmlns="http://www.w3.org/2000/svg" aria-label="facebook" class="" name="facebook"><path d="M6.25 6.53125V4.15625C6.25 3.50075 6.81 2.96875 7.5 2.96875H8.75V0H6.25C4.17875 0 2.5 1.59481 2.5 3.5625V6.53125H0V9.5H2.5V19H6.25V9.5H8.75L10 6.53125H6.25Z"></path></svg>
                                        </a>
                                    </Connect>
                                </SocialConnect>
                            </RightContent>
                        </FooterContent>
                    </BottomFooterContainer>
                </div>
            </BottomFooter>
      </FooterContainer>
    )
}

export default Footer

const RightContent = styled.div`
    padding-left: 5%;
    width: 35%;
`
const SocialConnect = styled.div`
    box-sizing: border-box;
    padding-top: 1.25rem;
    width: 100%;
    color: #000;

    h4{
        font-size: .9375rem;
        width: 45%;
    }
`

const Connect = styled.div`
    width: 80%;
    display: flex;

    a{
        background-color: #333;
        border-radius: 1.5625rem;
        height: 2.625rem;
        margin: .125rem 3% .125rem .125rem;
        width: 2.625rem;
        color: #fff;
        justify-content: center;
        align-items: center;
        display: flex;

        svg path{
            fill: white;
        }

        :hover{
            background-color: #fff;
            filter: none;
            transition: background-color .3s ease-in-out;

            svg path{
                fill: inherit;
            }
        }

        @media screen and (max-width: 768px){
            background-color: #333;
            filter: grayscale(100%);
            transition: background-color .3s ease-in-out;

        }
    }
`

const BottomFooter = styled.section`
    background: #E8E8E8;
`
const BottomFooterContainer = styled.div`
    color: #000;
    background-color: #E8E8E8;
    max-height: 80%;
    padding: 1.5625rem 1.9375rem;

`
const FooterContent = styled.div`
    display: flex;
    padding-left: 0;
    justify-content: space-between;
    -webkit-box-pack: justify;
`
const LeftContent = styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    margin: 0;
`

const AboutHead = styled.div`
    margin-bottom: 1.25rem;
    flex-grow: 1;
    flex-basis: auto;
    flex-shrink: 0;
    color: #979797;
    -webkit-box-flex: 1;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;

    a{
        text-decoration: none;
        color: #000;

        h4{
            cursor: default;
            font-size: .9375rem;
            font-weight: 600;
            margin-bottom: .625rem;
            margin-top: 0;
            min-height: .9375rem;
            text-transform: uppercase;

            :hover{
                color: #F41926;
                text-shadow: 0 .0625rem .0625rem #fff;
            }
        }

    }
    ul{
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    li{
        font-size: .8125rem;
        font-weight: 300;
        list-style: none;
        padding-top: .625rem;

        a{
            text-decoration: none;
            :hover{
                color: #F41926;
            }
        }
    }
`


const FooterContainer = styled.footer`
    margin-top: 20px;
`
const TopWrapper = styled.section`
    background-color: #fff;
    
`
const Container = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: .9375rem 1.875rem;

    @media screen and (max-width: 576px){
        padding: 0 7% 2%;
    }

    

    @media screen and (min-width: 1200px){
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    form{
        display: flex;
        max-height: 15%;
        width: 35%;
        @media screen and (min-width: 992px){
            -webkit-box-pack: end;
            justify-content: flex-end;
        }

        input{
            background-color: #fff;
            border: 1px solid #DD242B;
            border-radius: .7875rem 0 0 .7875rem;
            font-size: .875rem;
            max-height: 2.8125rem;
            outline: none;
            padding-left: .625rem;
            width: 100%;
        }

        .button_submit{
            background-color: #DD242B;
            border: none;
            border-radius: 0 .7875rem .7875rem 0;
            color: #fff;
            font-size: .875rem;
            font-weight: 600;
            height: 2.8125rem;
            text-align: center;
            width: 30%;
            cursor: pointer;
        }
    }
`
const SocialContainer = styled.div`
    flex-wrap: nowrap;
    color: #b5b5b5;
    display: flex;
    @media screen and (min-width: 1200px){
        padding-right: 5.625rem;
        /* width: 55%; */
    }
    @media screen and (max-width: 576px){
        display: block;
        margin-top: 1.5635rem;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        -webkit-box-pack: justify;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: vertical;
    }

`

const GetDeal = styled.div`

@media screen and (max-width: 576px){
    display: block;
    margin-top: -.625rem;
    width: 100%;
}
`

const DealTitle = styled.div`

    h3{
        margin-bottom: .625rem;
        margin-top: 0;
        text-transform: uppercase;
        font-size: .875rem;
    }
`
// const Socials = styled.div`

// `

const Email = styled.div`
    display: flex;
    margin-right: 1.875rem;
    transition: color .3s ease-in-out;
    align-items: center;

    @media screen and (max-width: 576px){
        margin: .3125rem .625rem 1.875rem;
    }
`

const EmailIcon = styled.div`
    padding-right: .3125rem;
    width: 1.5625rem;

    @media screen and (max-width: 576px){
        transform: scale(2.3);
        margin-bottom: auto;
        width: 1.5625rem;
    }

    svg{
        height: auto;
        transform: scale(1.5);
        width: 100%;
        vertical-align: middle;
        /* border: 1px solid #DD242B; */
        /* border-radius: 100px; */


        @media screen and (max-width: 576px){
            transform: scale(1);
        }
    }
`

const EmailTitle = styled.div`
    display: block;
    font-size: .875rem;
    margin-left: .625rem;
    white-space: nowrap;

    @media screen and (max-width: 576px){
        padding-left: 4%;
    }

    p{
        align-items: center;
    }

    h3{
        margin-bottom: .625rem;
        margin-top: 0;
        text-transform: uppercase;
        font-size: .875rem;
    }
`