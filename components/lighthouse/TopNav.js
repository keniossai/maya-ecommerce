import React, {useState} from 'react'
import styled from 'styled-components'

const TopNav = () => {
    const [isShown, setIsShown] = useState(false);
  return (
    <LightHouse>
        <LightHouseWrap className='container'>
            <NavGlobal>
                <NavItemWrap>
                    <NavItemSub>
                        <SellerTitle>
                            <a href=''>
                                Sell on Maya 
                            </a> 
                        </SellerTitle>
                        <SellerLogin>
                            <li>Seller Login</li>
                        </SellerLogin>
                    </NavItemSub>
                </NavItemWrap>
                <NavItemWrap>
                    <HelpItemSub>
                        <HelpTitle>
                            <a href=''>
                                Help 
                            </a>
                        </HelpTitle>
                        <HelpSub>
                            <li><a href="">Customer Service</a></li>
                            <li><a href="">Dispute & Report</a></li>
                            <li><a href="">Live Chat</a></li>
                        </HelpSub>
                    </HelpItemSub>
                    <BuyerProtection>
                            <a href=''>
                                Buyer Protection
                            </a>
                    </BuyerProtection>
                    <MobileApp>
                            <a href=''> App</a>
                    </MobileApp>
                </NavItemWrap>
                
            </NavGlobal>
        </LightHouseWrap>
    </LightHouse>
  )
}

export default TopNav

const LightHouse = styled.div`
    position: relative;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fafafa;
    z-index: 22;
    font-size: 12px;

    @media screen and (max-width: 768px){
        display: none;
    }

`

const LightHouseWrap = styled.div`
    /* position: relative; */
`

const NavGlobal = styled.div `
    position: absolute;
    right: 0;
    top: 0;
`

const NavItemWrap = styled.div `
    float: left;
    position: relative;
    padding: 0 4px;

    ::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 16px;
        overflow: hidden;
        top: 11px;
        right: 0;
        border-right: 1px solid #ccc;

    }

`

const NavItemSub  = styled.div `
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
    padding: 0;

    &::last-child{
        border-right: 0;
    }

`

const SellerTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 24px 0 10px;
    color: #333;
    cursor: pointer;
    line-height: 39px;
    font-size: 12px;

    &::before{
        content: "";
        position: absolute;
        top: 18px;
        right: 12px;
        width: 8px;
        height: 5px;
        overflow: hidden;
        background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -1271px;
        background-repeat: no-repeat;
    }

`

const SellerLogin = styled.ul`
    display: none;
    position: absolute;
    top: 33px;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    list-style: none;
    width: auto;
`

// Help Items
const HelpItemSub = styled.div`
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
`

const HelpTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 24px 0 10px;
    color: #333;
    cursor: pointer;
    line-height: 39px;
    font-size: 12px;

    &::before{
        content: "";
        position: absolute;
        top: 18px;
        right: 12px;
        width: 8px;
        height: 5px;
        overflow: hidden;
        background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -1271px;
        background-repeat: no-repeat;
    }
    
`

const HelpSub = styled.ul`
    display: none;
    position: absolute;
    top: 33px;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    width: auto;

    li{
        list-style: none;
        margin-left: 0;
    }

    a{
        display: block;
        padding:0 10px;
        line-height: 35px;
        white-space: nowrap;
        height: 35px;
    }
`

const BuyerProtection = styled.div`
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
    padding: 0 8px;

    a{
        margin: 0;
        padding: 0;
        color: #333;
        cursor: pointer;
    }
`

const MobileApp = styled.div`
    padding: 0 8px;
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;

    a{
        line-height: 18px;
        position: relative;
        padding-left: 20px;
        display: inline-block;
        line-height: 18px;
        margin-top: 9px;
    }

    a::before{
        content: "";
        position: absolute;
        top: 1px;
        left: 0;
        width: 16px;
        height: 16px;
        overflow: hidden;
        background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -923px;
        background-repeat: no-repeat;
    }
`

const BuyerTitle = styled.span`

`

const PersonalInfo = styled.div`
    float: left;
    padding: 0 4px;
    position: relative;
`

const WishList = styled.div`
    position: relative;
    padding: 0 8px;
    float: left;
    height: 39px;
    line-height: 39px;

    .heart{
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        background-image: url(http://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -1377px;
        background-repeat: no-repeat;
    }

    .text{
        margin-left: 4px;
    }
`

const UserAccount = styled.div`
    position: relative;
    float: left;
    line-height: 39px;
    height: 39px;

    .text{
        margin-left: 4px;
    }

    &:hover{
        background-color: #fff;
        margin: -1px -1px 0;
        height: 35px;
        border: 1px solid #e8e8e8;
        border-bottom: 0;
        z-index: 33;
        box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, .04);
    }
`



const UserAccountPort = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 8px;

    a{
        position: relative;
        padding-right: 16px;
    }

    .ng-person{
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -851px;
        background-repeat: no-repeat;
    }

    a::after{
        content: "";
        position: absolute;
        top: 7px;
        right: 0;
        width: 8px;
        height: 5px;
        overflow: hidden;
        background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
        background-position: 0 -1271px;
        background-repeat: no-repeat;
    }
`

const UserAccountMain = styled.div`
    position: absolute;
    font-size: 13px;
    display: block;
    background-color: #fff;
    top: 33px;
    right: -1px;
    padding-top: 15px;
    width: 242px;
    border: 1px solid #e8e8e8;
    color: #656565;
    z-index: 12;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1);

    a{
        cursor: pointer;
    }
`


const UserSignIn = styled.div`
    display: block;
    padding: 0 16px;

    .welcomeWrap{
        line-height: 20px;
        display: block;
        font-weight: 400;
        font-size: 14px;
    }

    .Line{
        border-bottom: 1px solid #f2f2f2;
        display: block;
        margin: 10px 16px 0;
        height: 0;
    }
`

const JoinButton = styled.p`
    display: block;
    margin-top: 10px;
    font-weight: 400;

    .joinButton{
        background-color: #0574b5;
        color: #fff;
        border-radius: 2px;
        width: 100px;
        text-align: center;
        display: inline-block;
        font-weight: 700;
        padding: 6px 0;
        line-height: 20px;

    }

    .signInButton{
        background-color: #fff1f1;
        color: #0574b5;
        margin-left: 4px;

        border-radius: 2px;
        font-weight: 700;
        padding: 6px 0;
        width: 100px;
        text-align: center;
        display: inline-block;
        line-height: 20px;
    }
`
const QuickEntry = styled.ul`
    margin-bottom: 8px;
    padding: 0;

    li{
        list-style: none;
        margin-left: 0;

    }

    a{
        display: block;
        line-height: 32px;
        height: 32px;
        white-space: nowrap;
        position: relative;
        color: #333;
        cursor: pointer;
    }

`