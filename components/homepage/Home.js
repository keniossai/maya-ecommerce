import React from 'react'
import styled from 'styled-components'
import Banner from '../homepage/Banner'
import Category from '../homepage/Category'
import AboutUs from './AboutUs'
import Topdeals from './Topdeals'

const Home = () => {
	return (
		<HomeFirstScreen>
			<Container>
				<HomeScreenMain>
					<Category />
					<Banner />
				</HomeScreenMain>
					<Topdeals />
					<AboutUs />
			</Container>
		</HomeFirstScreen>
	)
}

export default Home

const HomeFirstScreen = styled.div`
	position: relative;
`
const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-left: 0;
	padding-right: 0;
	width: 1360px;

	@media screen and (max-width: 768px){
		width: 100%;
	}
	

	&::before{
		content: " ";
		display: table;
	}
`
const HomeScreenMain = styled.div`
	position: relative;
	width: 100%;
	padding-left: 240px;
	margin-top: 16px;

	@media screen and (max-width: 768px){
		padding: 0;
	}
`

const ChannelMain = styled.div`
	height: 40px;
`

const Zones = styled.div``

const DealZone = styled.div`
	height: 40px;
	overflow: hidden;

	a {
		position: relative;
		display: inline-block;
		line-height: 40px;
		padding: 0 15px;
		font-size: 16px;
		font-weight: 700;
		color: #222;
		text-decoration: none;
	}
`

