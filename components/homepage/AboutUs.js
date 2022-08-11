import React from 'react'
import styled from 'styled-components'

function AboutUs () {
    return (
      <section>
        <About>
            <AboutHead>
                <h3>Maya Online Shopping in Nigeria - Best Shopping Site</h3>
            </AboutHead>
            <Content>Maya.com is Nigeria's number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.</Content>
        </About>
      </section>
    )
}

export default AboutUs

const About = styled.div`
    background-color: #fff;
    border-radius: .3125rem;
    color: #5a5f66;
    margin: 0;
    padding: .625rem 1.25rem 1.25rem;
`

const AboutHead = styled.div`
    width: auto;
`

const Content = styled.div`
    font-size: .875rem;
    letter-spacing: .00625rem;
    line-height: 1.4375rem;
    width: auto;
`