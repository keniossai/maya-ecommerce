import React from 'react'
import styled from 'styled-components'
import {VscMenu} from 'react-icons/vsc'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart2, BsSearch} from 'react-icons/bs'
import Image from 'next/image'
import logo from '../../public/mobile.png'

const MobileNav = () => {
  return (
    <MobileContainer>
        <MobileWrapper>
            <MenuWrapper>
                <Menu><VscMenu className="icon" /></Menu>
                <Logo><Image src={logo} className='site-logo' alt="maya-logo"/></Logo>
                <CartContainer>
                    <WishlistIcon><AiOutlineHeart className='icon' /></WishlistIcon>
                    <CartIcon><BsCart2 className='icon' /></CartIcon>
                </CartContainer>
            </MenuWrapper>
            <SearchContainer>
                <SearchWrapper>
                    <SearchWrap>
                        <form>
                            <InputWrap>
                                <input type="text" placeholder='What are you looking for...' />
                            </InputWrap>
                            <button type='submit' className='searchBar-Submit'><BsSearch className='icon' /></button>
                        </form>
                    </SearchWrap>
                </SearchWrapper>
            </SearchContainer>
        </MobileWrapper>
    </MobileContainer>
  )
}

export default MobileNav

const MobileContainer = styled.nav`
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 150;

    @media screen and (min-width: 768px){
        display: none;
    }
`

const MobileWrapper = styled.div`
    box-shadow: 0 .125rem .25rem 0 rgba(0,0,0,.05);
    padding: .625rem .9375rem;
`
const MenuWrapper = styled.div`
    display: block;
    align-items: center;
`

const Menu = styled.a`
    display: inline-block;
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
    margin-right: .625rem;

    .icon{
        font-size: 25px;
    }
`
const Logo = styled.a`
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
    margin-right: 1.5rem;
    vertical-align: middle;
    display: inline-block;

    .site-logo{
        width: 50px !important;
    }
`

const CartContainer = styled.div`
    float: right;
    align-items: center;
`

const CartIcon = styled.a`
    display: inline-block;
    position: relative;
    text-align: right;
    width: 2.1875rem;

    color: inherit;
    cursor: pointer;
    text-decoration: inherit;

    .icon{
        font-size: 25px;
    }
`


const WishlistIcon = styled.a`
    display: inline-block;
    position: relative;
    text-align: right;
    width: 2.1875rem;

    color: inherit;
    cursor: pointer;
    text-decoration: inherit;

    .icon{
        font-size: 25px;
    }
`

const SearchContainer = styled.div`
    display: flex;
    font-size: .5rem;
    height: 2.5rem;
    margin-top: .625rem;
`
const SearchWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #DD242B;
    flex-grow: 1;
    -webkit-box-flex: 1;
`
const SearchWrap = styled.div`
    width: 100%;

    .searchBar-Submit{
        background-color: #DD242B;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        border: 2px solid #DD242B;
        color: #ed017f;
        cursor: pointer;
        font-weight: 600;
        outline: none;
        width: 2.8125rem;
    }

    form{
        display: flex;
        height: 100%;
        width: 100%;
    }

    .icon{
        color: #fff;
        font-size: 20px;
    }
`

const InputWrap = styled.div`
    position: relative;
    width: 100%;

    

    input{
        background-color: transparent;
        height: 100%;
        width: 100%;
        padding-left: .625rem;
        padding-right: .625rem;
        border-bottom-left-radius: .25rem;
        border-top-left-radius: .25rem;
        font-size: .75rem;
        border: none;
        outline: none;
    }
`