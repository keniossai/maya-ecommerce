import React from 'react'
import styled from 'styled-components'

function BestSelling () {
    return (
      <BestWrapper>
        <BestHeader>
            <Header></Header>
        </BestHeader>
        <ProductWrapper>
            <Wrapper>
                <Product>
                    <a href="">
                        <span>41% Off</span>
                        <Item>
                            <picture>
                                <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/B/_1655713606.jpg" alt="" />
                            </picture>
                        </Item>
                    </a>
                </Product>
            </Wrapper>
        </ProductWrapper>
      </BestWrapper>
    )
}

export default BestSelling

const BestWrapper = styled.section`
    margin: .9375rem auto;
    
    @media  screen and (min-width: 768px){
        :not(:last-child) {
        margin-bottom: 1.25rem;
        }
    }    
`

const BestHeader = styled.div`

`

const Header = styled.h2`

`
const ProductWrapper = styled.section`

`
const Wrapper = styled.ul`

`

const Product = styled.li`

`
const Item = styled.div`

`