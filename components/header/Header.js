import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '../../public/maya.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdTrackChanges} from 'react-icons/md'
import {VscMenu} from 'react-icons/vsc'


const Header = () => {
    return(
        <>
        <PreLoginContainer>
            <PreHeader className='container'>
                <HeaderMain>
                    <HeaderLogo>
                        <a href="">
                            <Image className='site-logo' src={logo} alt="" />
                        </a>
                    </HeaderLogo>
                    <SearchWrap>
                        <SearchbarWrapper>
                            <SearchbarBody>
                                <form action="">
                                    <SearchIcon></SearchIcon>
                                    <UiSearch>
                                        <input className='key-word' placeholder='What are you loooking for...' type="text" />
                                    </UiSearch>
                                    <input className='searchBar-Submit' type="submit" value="Search" />
                                </form>
                            </SearchbarBody>
                        </SearchbarWrapper>
                    </SearchWrap>
                    <Notification>
                        <UserAccount>
                            <UserSign>
                                <UserIcon></UserIcon>
                                <AccountTitle>
                                    <LoginLabel><a href="">Sign In</a></LoginLabel>
                                    <LoginLabel><a href="">Join Free</a></LoginLabel>
                                </AccountTitle>
                            </UserSign>
                        </UserAccount>
                        <WishListContainer>
                            <WishList>
                                <WishIcon><AiOutlineHeart className='wishIcon' /></WishIcon>
                                <WishTitle>
                                    <LoginLabel><a href="">Wish List</a></LoginLabel>
                                </WishTitle>
                            </WishList>
                        </WishListContainer>
                        <WishListContainer>
                            <WishList>
                                <OrderIcon><MdTrackChanges className='OrderIcon' /></OrderIcon>
                                <WishTitle>
                                    <LoginLabel><a href="">Track Order</a></LoginLabel>
                                </WishTitle>
                            </WishList>
                        </WishListContainer>
                        
                        <CartContainer>
                            <CartList>
                                    
                                <CartIcon><span className="cart-number">0</span></CartIcon>
                                <CartTitle>
                                    <LoginLabel><a href="">Cart</a></LoginLabel>
                                </CartTitle>
                            </CartList>
                        </CartContainer>
                    </Notification>
                </HeaderMain>
            </PreHeader>
        </PreLoginContainer>
        <CategoriesContainer>
            <CategoryWrapper>
                <CategoryTitle>
                    Quick Selection
                </CategoryTitle>
                <CategoryTitle>
                    Fashion
                </CategoryTitle>
                <CategoryTitle>
                    Children wears
                </CategoryTitle>
                <CategoryTitle>
                    Phone & Accessories
                </CategoryTitle>
                <CategoryTitle>
                    Homes & Kitchen
                </CategoryTitle>
            </CategoryWrapper>
        </CategoriesContainer> 
        </>
    )
}

const CategoriesContainer = styled.div`
    padding: 0;
    background-color: #DD242B;
    box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.12),0 .125rem .25rem 0 rgba(0,0,0,.08);
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
const CategoryWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    position: relative;

    
`
const CategoryTitle = styled.a`
    padding-right: 1.875rem;
    color: #fff;
    cursor: pointer;
    font-size: .8225rem;
    transition-duration: .3s;
    transition-property: color,background-color;
    transition-timing-function: ease-in-out;
    white-space: nowrap;

    &:hover{
        background-color: #fff;
        color: #000;
    }

    .icon{
        margin: -.0625rem 0 0 .3125rem;
        vertical-align: middle;
        color: white;
        font-size: 20px;
    }

    @media (min-width: 1200px){
        padding: .75rem 1.875rem;
    }
  
    &:first-child{
        font-weight: 700;
        padding-left: 1.5rem;
    }
`

// const CategoriesContainer = styled.div`
//     padding-left: 0;
//     padding-right: 12px;
//     max-width: 1300px;
//     margin: 0 auto;
//     height: 40px;
//     line-height: inherit;
//     padding-top: 2px;
//     padding-bottom: 2px;
//     box-sizing: content-box;
//     display: block;
//     clear: both;
//     position: relative;
// `
// const HdCategory = styled.div`
//     display: inline-block;
// `
// const CategoryUnit = styled.div`
//     position: relative;
//     z-index: 6;
// `
// const HeaderCatWrapper = styled.div`
//     position: relative;
//     display: inline-block;
// `
// const Cathead = styled.h1`
//     padding-left: 16px;
//     padding-right: 10px;
//     width: 100%;
//     box-sizing: border-box;
//     line-height: 37px;
//     border: 1px solid transparent;
//     height: 40px;
//     color: #333;
//     background: #fff;
//     font-size: 14px;
//     text-align: center;

//     margin-top: 0;
//     font-weight: 400;

//     .icon{
//         color: #333;
//         padding: 0 2px;
//         vertical-align: middle;
//         font-size: 25px;
//         display: inline-block;
//         width: 23px;
//         margin-right: 9px;
//         line-height: 24px;
//         -webkit-text-stroke-width: .1px;
//         -moz-osx-font-smoothing: grayscale;
//         font-style: normal;
//         font-variant: normal;
//         text-transform: none;
//     }
// `



export default Header

const PreLoginContainer = styled.div`
    box-shadow: 2px 2px 3px rgba(0,0,0,.1);
    background-color: #fff;
    position: relative;
    z-index: 100;
    text-align: left;
    display: block;
    width: 100%;
    min-width: 720px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const PreHeader = styled.div`
    display: block;
    margin: 0 auto;
`

const HeaderMain = styled.div`
    height: 110px;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    z-index: 9;
    

    @media screen and (max-width: 1264px){
        padding-left: 20px;
        padding-right: 20px;
        max-width: 1500px;
        margin: 0 auto;
    }
`
const HeaderLogo = styled.div`
    padding-top: 1px;
    line-height: 15px;
    float: left;

    a{
        height: 38px;
        display: block;
        font-size: 0;
        line-height: 0;
        outline: 0;

        background-size: contain !important;
        width: 180px !important;
        margin-right: 40px !important;
        background-position-y: center !important;
    }

`


const SearchWrap = styled.div`
    display: block;
    width: calc(100% - 574px);
    line-height: 15px;
    float: left;
    margin-top: 10px;
`
const SearchbarWrapper = styled.div``

const SearchIcon = styled.i`
    position: absolute;
    z-index: 3;
    background-image: url("https://s.alicdn.com/@img/tfs/TB1mHDTXMaH3KVjSZFpXXbhKpXa-600-400.png?webp=close");
    left: auto;
    top: 10px;
    right: -48px;
    width: 16px;
    height: 16px;
    background-position: -388px -193px;
    cursor: pointer;
`

const SearchbarBody = styled.div`
    height: 40px;
    border: 2px solid;
    border-radius: 20px 0 0 20px;
    margin-right: 140px;
    border-color: #DD242B #DD242B #DD242B;
    position: relative;
    background-color: #fff;

    input{
        top: -2px;
    }

    .searchBar-Submit{
        border-radius: 0 20px 20px 0 !important;
        height: 40px;
        border: 0;
        font-size: 16px;
        position: absolute;
        padding-left: 52px;
        padding-right: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        width: 140px;
        right: -139px;
        background-color: #DD242B;
        cursor: pointer;
        color: #fff;
    }
`
const UiSearch = styled.div`
    margin-left: 3px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 10px;
    position: relative;

    input{
        vertical-align: middle;
        
    }

    .key-word{
        height: 34px;
        line-height: 100%;
        width: 100%;
        margin: 0;
        border: 0;
        font-weight: 400;
        font-size: 14px;
        overflow: visible;
        outline: 0;
        -webkit-appearance: none;
        box-shadow: none
    }
`

const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    position: absolute;
    right: 20px;

`

const UserAccount = styled.div`
    padding: 12px 0;
    display: inline-block;
    position: relative;
    text-align: left;
`

const UserSign = styled.div`
    max-width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const UserIcon = styled.div`
    background-image: url("https://s.alicdn.com/@img/tfs/TB1mHDTXMaH3KVjSZFpXXbhKpXa-600-400.png?webp=close");
    background-position: -313px -144px;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    margin-top: 6px;
    position: static;
    float: left;

`

const AccountTitle = styled.div`
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-left: 4px;
    vertical-align: middle;
    line-height: 19px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const LoginLabel = styled.div`
    color: #2192D9;
    font-size: 12px;
    line-height: 23px;
    height: 20px;

    a{
        color: #333;
        text-decoration: none;
    }

    a:hover{
        color: #DD242B;
    }
`

const WishListContainer = styled.div`
    padding: 12px 0;
    display: inline-block;
    position: relative;
    text-align: left;
`

const WishList = styled.div`
    max-width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
`

const WishIcon = styled.div`
    position: relative;
    height: 25px;
    width: 20px;
    align-items: center;
    .wishIcon{
        font-size: 30px;
        position: absolute;
    }
`

const WishTitle = styled.div`
    text-align: center;
`



const CartContainer = styled.div`
    padding: 12px 0;
    display: inline-block;
    position: relative;
`

const CartIcon = styled.div`
    background-image: url("https://s.alicdn.com/@img/tfs/TB1mHDTXMaH3KVjSZFpXXbhKpXa-600-400.png?webp=close");
    background-position: -242px -191px;
    width: 23px;
    height: 20px;
    background-repeat: no-repeat;
    position: static;

    .cart-number{
        background: #DD242B;
        max-width: 25px;
        min-width: 20px;
        height: 20px;
        color: #fff;
        border-radius: 10px;
        position: absolute;
        top: -1px;
        left: 22px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        padding: 0 2px;
    }
`

const CartList = styled.div`
    max-width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
`
const CartTitle = styled.div``



const OrderIcon = styled.div`
    position: relative;
    height: 25px;
    width: 35px;
    align-items: center;
    .OrderIcon{
        font-size: 28px;
        position: absolute;
    }
`

