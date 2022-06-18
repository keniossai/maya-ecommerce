import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '../../public/maya.png'


const Header = () => {
    return(
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
                                    <UiSearch>
                                        <input className='key-word' type="text" />
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
                    </Notification>
                </HeaderMain>
            </PreHeader>
        </PreLoginContainer>
    )
}

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
        color: #fff;
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
    }
`
const UiSearch = styled.div`
    margin-left: 102px;
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
    /* text-align: right;
    position: absolute;
    right: 20px;
    top: 8px; */

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