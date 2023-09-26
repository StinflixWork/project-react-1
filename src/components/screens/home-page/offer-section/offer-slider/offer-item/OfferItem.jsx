import {
	OfferItemContent,
	OfferItemImage,
	OfferItemStyled,
	SliderContentInfo,
	SliderContentPrice
} from './OfferItem.styled.js'
import SliderStain from 'assets/icons/slider-stain-burger.svg'
import SliderImage from 'assets/images/slider-burger.png'
import { Tag } from 'styles/Tag.styled.js'
import Button from 'components/ui/button/Button.jsx'

const OfferItem = () => {
	return (
		<OfferItemStyled>
			<OfferItemImage>
				<img src={SliderStain} alt="Stain for burger" />
				<img src={SliderImage} alt="Burger slider" />
			</OfferItemImage>
			<OfferItemContent>
				<SliderContentPrice>
					<Tag>25% off</Tag>
					<span>98,00 UAH</span>
				</SliderContentPrice>
				<SliderContentInfo>
					<h3>burger deluxe edition</h3>
					<p>Details:</p>
					<ul>
						<li>cheese ·</li>
						<li>lettuce ·</li>
						<li>BBQ ketchup ·</li>
						<li>Bacon cheddar ·</li>
						<li>beef</li>
					</ul>
				</SliderContentInfo>
				<Button>Order now</Button>
			</OfferItemContent>
		</OfferItemStyled>
	)
}

export default OfferItem
