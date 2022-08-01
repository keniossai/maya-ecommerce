import React from 'react'
import styled from 'styled-components'

const Category = () => {
	return (
		<CategoryMain>
			<Categories>
				<NewCategoryMain>
					<CategoryContent>
						<a href=''>
							<span>Categories</span>
						</a>
					</CategoryContent>
					<CategoryListBox>
						<dl className='cl-items-women'>
							<dt className='cat-name'>
								<span className='women'>
									<a href=''>Women's Fashion</a>
								</span>
							</dt>
						</dl>
						{/* <dd className='sub-cat'>
                            <div className="sub-cate-main">
                                <div className="sub-cate-content">
                                    <div className="sub-cate-row">
                                        <dl className="sub-cate-items">
                                            <dt>
                                                <a href="">Women's Fashion</a>
                                            </dt>
                                            <dd>
                                                <a href="">Dresses</a>
                                                <a href="">Tees</a>
                                                <a href="">Blouses &amp; Shirts</a>
                                                <a href="">Hoodies &amp; Sweatshirts</a>
                                                <a href="">Women's Sets</a>
                                                <a href="">Suits &amp; Blazers</a>
                                                <a href="">Bodysuits</a>
                                                <a href="">Tanks &amp; Camis</a>
                                                <a href="">Coats &amp; Jackets</a>
                                                <a href="">Sweaters</a>
                                            </dd>
                                        </dl>
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Swimwear</a>
                                            </dt>
                                            <dd>
                                                <a href="">Bikini Sets</a>
                                                <a href="">Cover-Ups</a>
                                            </dd>
                                        </dl>
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Muslim Fashion</a>
                                            </dt>
                                            <dd>
                                                <a href="">Abaya</a>
                                                <a href="">Women's Hijabs</a>
                                                <a href="">Muslim Sets</a>
                                                <a href="">Prayer Hats</a>
                                                <a href="">Dresses</a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="sub-cate-row">
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Bottoms</a>
                                            </dt>
                                            <dd>
                                                <a href="">Leggings</a>
                                                <a href="">Skirts</a>
                                                <a href="">Shorts</a>
                                                <a href="">Jeans</a>
                                                <a href="">Pants &amp; Capris</a>
                                            </dd>
                                        </dl>
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Plus Size Clothes</a>
                                            </dt>
                                            <dd>
                                                <a href="">Plus Size Dresses</a>
                                            </dd>
                                            <dd>
                                                <a href="">Plus Size T-Shirts</a>
                                            </dd>
                                            <dd>
                                                <a href="">Plus Size Sets</a>
                                            </dd>
                                            <dd>
                                                <a href="">Plus Size Pants &amp; Capris</a>
                                            </dd>
                                            <dd>
                                                <a href="">Plus Size Outerwear</a>
                                            </dd>
                                            <dd>
                                                <a href="">Plus Size Blouses &amp; Shirts</a>
                                            </dd>
                                        </dl>
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Weddings &amp; Events</a>
                                            </dt>
                                            <dd>
                                                <a href="">Wedding Dresses</a>
                                                <a href="">Prom Dresses</a>
                                                <a href="">Evening Dresses</a>
                                                <a href="">Africa Clothing</a>
                                                <a href="">Cosplay Costumes</a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="sub-cate-row">
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Women's Underwear</a>
                                            </dt>
                                            <dd>
                                                <a href="">Pajama Sets</a>
                                                <a href="">Bras</a>
                                                <a href="">Panties</a>
                                                <a href="">Women's Socks</a>
                                                <a href="">Bra &amp; Brief Sets</a>
                                                <a href="">Shapewear</a>
                                            </dd>
                                        </dl>
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Accessories</a>
                                            </dt>
                                            <dd>
                                                <a href="">Hair Accessories</a>
                                                <a href="">Sunglasses</a>
                                                <a href="">Blue Light Blocking Glasses</a>
                                                <a href="">Baseball Caps</a>
                                                <a href="">Bucket Hats</a>
                                                <a href="">Belts</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="sub-cate-row scp-cate-brand"></div>
                            </div>
                        </dd> */}
						<dl className='cl-items-men'>
							<dt className='cat-name'>
								<span className='men'>
									<a href=''>Men's Fashion</a>
								</span>
							</dt>
						</dl>
						{/* <dd className="sub-cat">
                            <div className="sub-cate-main">
                                    <div className="sub-cate-content">
                                        <div className="sub-cate-row">
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Hot Sale</a></dt>
                                                <dd><a href="">Hoodies &amp; Sweatshirts</a><a href="">T-Shirts</a><a href="">Shirts</a><a href="">Casual Shorts</a><a href="">Men's Sets</a><a href="">Jackets</a></dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Bottoms</a></dt>
                                                <dd><a href="">Casual Pants</a><a href="">Sweatpants</a><a href="">Cargo Pants</a><a href="">Jeans</a><a href="">Harem Pants</a><a href="">Shorts</a></dd>
                                            </dl>
                                        </div>

                                        <div className="sub-cate-row">
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Outerwear &amp; Jackets</a></dt>
                                                <dd><a href="">Jackets</a><a href="">Sweaters</a><a href="">Casual Faux Leather</a><a href="">Genuine Leather</a><a href="">Parkas</a><a href="">Down Jackets</a><a href="">Suits &amp; Blazer</a></dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Underwear &amp; Loungewear</a></dt>
                                                <dd><a href="">Boxers</a><a href="">Briefs</a><a href="">Long Johns</a><a href="">Men's Sleep &amp; Lounge</a><a href="">Pajama Sets</a></dd>
                                            </dl>
                                        </div>

                                        <div className="sub-cate-row">
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Accessories</a></dt>
                                                <dd><a href="">Scarves</a><a href="">Skullies &amp; Beanies</a><a href="">Prescription Glasses</a><a href="">Gloves &amp; Mittens</a><a href="">Belts</a><a href="">Bomber Hats</a><a href="">Fedoras</a><a href="">Berets</a><a href="">Baseball Caps</a></dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                                <dt><a href="">Novelty &amp; Special Use</a></dt>
                                                <dd><a href="">Cosplay Costumes</a><a href="">Stage &amp; Dance Wear</a><a href="">Exotic Apparel</a>
                                                </dd>
                                            </dl>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="sub-cate-row scp-cate-brand men-fashion"></div>
                                
                                
                            </div>
                        </dd> */}
						<dl className='cl-items-kids'>
							<dt className='cat-name'>
								<span className='kids'>
									<a href=''>Baby's Kid's & Toys</a>
								</span>
							</dt>
						</dl>
						{/* <dd className="sub-cat">
                            <div className='sub-cate-main'>
                                <div className='sub-cate-content'>
                                    <div className='sub-cate-row'>
                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Hot Categories
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    Dresses
                                                </a>
                                                <a href=''>
                                                    Clothing Sets
                                                </a>
                                                <a href=''>
                                                    Family Matching Outfits
                                                </a>
                                                <a href=''>
                                                    Hoodies &amp; Sweatshirts
                                                </a>
                                                <a href=''>
                                                    Sleepwear &amp; Robes
                                                </a>
                                                <a href=''>
                                                    Children's Shoes
                                                </a>
                                                <a href=''>
                                                    Baby Strollers
                                                </a>
                                            </dd>
                                        </dl>

                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Baby(0-3years old)
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    Baby Rompers
                                                </a>
                                                <a href=''>
                                                    Baby Clothing Set
                                                </a>
                                                <a href=''>
                                                    Baby’s First Walkers
                                                </a>
                                                <a href=''>
                                                    Baby Accessories
                                                </a>
                                                <a href=''></a>
                                                <a href=''>
                                                    Feeding
                                                </a>
                                                <a href=''>
                                                    Bedding
                                                </a>
                                                <a href=''>
                                                    Baby Teething Items
                                                </a>
                                                <a href=''>
                                                    Baby &amp; Toddler Toys
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>

                                    <div className='sub-cate-row'>
                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    For Girls
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                  Dresses
                                                </a>
                                                <a href=''></a>
                                                <a href=''>
                                                    Tops &amp; Tees
                                                </a>
                                                <a href=''>
                                                    Outerwear &amp; Coats
                                                </a>
                                                <a href=''>
                                                    Sleepwear &amp; Robes
                                                </a>
                                            </dd>
                                        </dl>

                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href='ing.html'>
                                                    For Boys
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    T-Shirts
                                                </a>
                                                <a href=''>
                                                    Outerwear &amp; Coats
                                                </a>
                                                <a href=''>
                                                    Jeans
                                                </a>
                                                <a href=''>
                                                    Hoodies &amp; Sweatshirts
                                                </a>
                                            </dd>
                                        </dl>

                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Mother &amp; Baby Items
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    Maternity Clothing
                                                </a>
                                                <a href=''>
                                                    Electric breast pumps
                                                </a>
                                                <a href=''>
                                                    Baby Souvenirs
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>

                                    <div className='sub-cate-row'>
                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Remote Control
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    RC Helicopters
                                                </a>
                                                <a href=''>
                                                    RC Cars
                                                </a>
                                                <a href=''>
                                                    RC Quadcopter
                                                </a>
                                            </dd>
                                        </dl>

                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Building &amp; Construction Toys
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    Blocks
                                                </a>
                                                <a href=''>
                                                    Model Building Toys
                                                </a>
                                            </dd>
                                        </dl>

                                        <dl className='sub-cate-items' data-role='two-menu'>
                                            <dt>
                                                <a href=''>
                                                    Toys &amp; Hobbies
                                                </a>
                                            </dt>

                                            <dd>
                                                <a href=''>
                                                    Squeeze Toys
                                                </a>
                                                <a href=''>
                                                    Action &amp; Toy Figures
                                                </a>
                                                <a href=''>
                                                    Dolls
                                                </a>
                                                <a href=''>
                                                    Stuffed &amp; Plush Animals
                                                </a>
                                                <a href=''>
                                                    Diecasts &amp; Toy Vehicles
                                                </a>
                                                <a href=''>
                                                    Game Collection Cards
                                                </a>
                                                <a href=''>
                                                    Stickers
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>

                                <div className='sub-cate-row scp-cate-brand kids-fashion'></div>
                            </div>
                        </dd> */}
						<dl className='cl-items-beauty'>
							<dt className='cat-name'>
								<span className='beauty'>
									<a href=''>Beauty & Personal Care</a>
								</span>
							</dt>
						</dl>
						{/* <dd className='sub-cat'>
							<div className='sub-cate-main'>
								<div className='sub-cate-content'>
									<div className='sub-cate-row'>
										<dl className='sub-cate-items'>
											<dt>
												<a href=''>Hair Weaves</a>
											</dt>
											<dd>
												<a href=' '>Bundles With Closure</a>
												<a href=''>3/4 Bundles</a>
												<a href=''>Pre-Colored Weaves</a>
												<a href=''>Closures</a>
											</dd>
										</dl>
										<dl className='sub-cate-items'>
											<dt>
												<a href=''>Lace Wigs</a>
											</dt>
											<dd>
												<a href=''>Lace Front Wigs</a>
												<a href=''>Full Lace Wigs</a>
												<a href=''>360 Lace Wigs</a>
												<a href=''>250% Density Lace Wigs</a>
											</dd>
										</dl>
										<dl className='sub-cate-items'>
											<dt>
												<a href=''>Synthetic Hair</a>
											</dt>
											<dd>
												<a href=''>Synthetic Lace Wigs</a>
												<a href=''>Synthetic Weaves</a>
												<a href=''>Hair Braids</a>
												<a href=''>Synthetic Extensions</a>
											</dd>
										</dl>
									</div>

									<div className='sub-cate-row'>
										<dl className='sub-cate-items' data-role='two-menu'>
											<dt>
												<a href=''>Makeup</a>
											</dt>
											<dd>
												<a href=''>Eyes</a>
												<a href=''>Lips</a>
												<a href=''>Face</a>
												<a href=''>Makeup Tools</a>
											</dd>
										</dl>
										<dl className='sub-cate-items' data-role='two-menu'>
											<dt>
												<a href=''>Health Care</a>
											</dt>
											<dd>
												<a href=''>Massage &amp; Relaxation</a>
												<a href=''>Household Health Monitors</a>
												<a href=''>Chinese Medicine</a>
												<a href=''>Personal Health Care Items</a>
											</dd>
										</dl>
										<dl className='sub-cate-items' data-role='two-menu'>
											<dt></dt>
										</dl>
									</div>

									<div className="sub-cate-row">
                                        <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Nail Art &amp; Tools</a>
                                            </dt>
                                            <dd>
                                                <a href="">Gel Nail Polish</a>
                                                <a href="">Nail Drills</a>
                                                <a href="">Nail Dryers</a>
                                                <a href="">Nail Glitter</a>
                                            </dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Personal Care</a>
                                            </dt>
                                            <dd>
                                                <a href="">Hair Care &amp; Styling</a>
                                                <a href="">Shaving &amp; Hair Removal</a>
                                                <a href="">Oral Hygiene</a>
                                            </dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Tattoos &amp; Body Art</a>
                                            </dt>
                                            <dd>
                                                <a href="">Tattoo Kits</a>
                                            </dd>
                                            </dl>
                                            <dl className="sub-cate-items" data-role="two-menu">
                                            <dt>
                                                <a href="">Adult Items</a>
                                            </dt>
                                            <dd>
                                                <a href="">Condoms</a>
                                                <a href="">Lubricants</a>
                                                <a href="">Vibrators</a>
                                            </dd>
                                        </dl>
                                    </div>
								</div>

								<div className='sub-cate-row scp-cate-brand kids-fashion'></div>
							</div>
						</dd> */}
						<dl className='cl-items-jewelry'>
							<dt className='cat-name'>
								<span className='jewelry'>
									<a href=''>Jewelry & Watches</a>
								</span>
							</dt>
						</dl>
						<dl className='cl-items-phone'>
							<dt className='cat-name'>
								<span className='phone'>
									<a href=''>Phones & Accessories</a>
								</span>
							</dt>
						</dl>
						<dl className='cl-items-computer'>
							<dt className='cat-name'>
								<span className='computer'>
									<a href=''>Computers & Accessories</a>
								</span>
							</dt>
						</dl>
						<dl className='cl-items-home'>
							<dt className='cat-name'>
								<span className='home'>
									<a href=''>Home & Kitchen</a>
								</span>
							</dt>
						</dl>
						<dl className='cl-items-other'>
							<dt className='cat-name'>
								<span className='other'>
									<a href=''>Outdoor Fun & Sports</a>
								</span>
							</dt>
						</dl>
					</CategoryListBox>
				</NewCategoryMain>
			</Categories>
		</CategoryMain>
	)
}

export default Category

// Category Styles
const CategoryMain = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 240px;
	height: 414px;
	border-radius: 8px;
	background-color: #fff;
	border: none;
	font-size: 13px;

	@media screen and (max-width: 768px){
		display: none;
	}
`

const Categories = styled.div`
	position: absolute;
	top: -1px;
	left: 0;
	width: 240px;
	border-radius: 8px;
`

const NewCategoryMain = styled.div`
	border: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 240px;
	height: 516px;
	border-radius: 8px;
`

const CategoryContent = styled.div`
	height: 40px;
	line-height: 40px;
	padding-left: 40px;
	font-size: 14px;
	background-color: #fff;
	position: relative;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	border-bottom: none;

	&::before {
		content: '';
		position: absolute;
		left: 16px;
		top: 14px;
		background-image: url('https://ae01.alicdn.com/kf/HTB12uSfbzzuK1Rjy0Fp761EpFXap.png');
		width: 15px;
		height: 13px;
		background-size: 100% 100%;
	}
`
const CategoryListBox = styled.div`
	position: relative;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;

	.cl-items-women {
		margin: 0;
	}
	.cat-name {
		position: relative;
	}

	span {
		border-color: transparent;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		word-break: break-all;
		cursor: pointer;
		background-color: #fff;
		border: 1px solid #fff;
		border-right: 0;
		padding-top: 4px;
		padding-left: 40px;
		position: relative;
		line-height: 21px;
	}

	.women::before {
		content: '';
		position: absolute;
		left: 10px;
		width: 24px;
		height: 24px;
		display: block;

		background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
		background-position: 0 -3780px;
		background-repeat: no-repeat;
	}

	.men::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -2807px;
		background-repeat: no-repeat;
	}

	.phone::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -2999px;
		background-repeat: no-repeat;
	}
	.beauty::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -487px;
		background-repeat: no-repeat;
	}
	.kids::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -1785px;
		background-repeat: no-repeat;
	}
	.computer::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -675px;
		background-repeat: no-repeat;
	}
	.home::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -1449px;
		background-repeat: no-repeat;
	}
	.jewelry::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -1697px;
		background-repeat: no-repeat;
	}
	.other::before {
		top: 5px;
		content: ' ';
		width: 24px;
		height: 24px;
		display: block;
		position: absolute;
		left: 10px;
		background-image: url(https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png);
		background-position: 0 -3504px;
		background-repeat: no-repeat;
	}

	.sub-cat {
		position: absolute;
		left: 238px;
		margin-left: 0;
		background-color: #fff;
		border: 1px solid #e9e9e9;
		z-index: 99;
		border-color: transparent;
		border-radius: 8px;
		box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
		top: 0;
	}

	.sub-cate-main {
		position: relative;
		width: auto;
		padding: 5px 0 10px 20px;
		white-space: nowrap;
		overflow: hidden;
	}

	.sub-cate-content {
		display: inline-block;
	}

	.sub-cate-row {
		display: inline-block;
		vertical-align: top;
		padding-right: 20px;
		width: 234px;
	}

	.sub-cate-items {
		display: block;
		margin-bottom: 5px;
		padding-right: 20px;
		width: 234px;
	}

	.sub-cate-items dt {
		border-bottom: 1px solid transparent;
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 5px;
		line-height: 35px;
		height: 35px;
	}

	.sub-cate-items dt a {
		color: #222;
		border-radius: 4px;
		max-width: 190px;
		text-overflow: ellipsis;
		word-wrap: normal;
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
	}
	.sub-cate-items dt a::after {
		content: '';
		display: inline-block;
		margin: 11px 0 0 15px;
		width: 9px;
		height: 13px;
		overflow: hidden;
		background: url(https://ae01.alicdn.com/kf/Hee223875f9f74af385b2e302dfc0e4bbM.png)
			no-repeat -3000px -50px;
		vertical-align: top;
	}

	.sub-cate-items dd {
		margin-left: 0;
	}

	.sub-cate-items dd a {
		font-size: 12px;
		color: #222;
		border-radius: 4px;
		display: block;
		max-width: 190px;
		text-overflow: ellipsis;
		word-wrap: normal;
		white-space: nowrap;
		overflow: hidden;
		line-height: 26px;
	}

	.scp-cate-brand {
		width: 227px;
		min-height: 450px;
		background-image: url('https://i.pinimg.com/736x/da/5b/ee/da5bee9e33d83b17e955c22c9fb3d9d9.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.men-fashion {
		width: 247px;
		min-height: 450px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('https://i.pinimg.com/736x/9f/e2/84/9fe28484b1136b64ddeff40788226017.jpg');
	}
	.kids-fashion {
		width: 247px;
		min-height: 517px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('https://ae01.alicdn.com/kf/HTB12YpxOpXXXXbpXVXXq6xXFXXXw/Spring-fall-Style-boys-and-Girls-letter-children-clothing-set-Denim-jacket-Jean-pant-t-shirt.jpg');
	}
`
