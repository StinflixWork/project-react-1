import { WrapperOffer } from './OfferSection.styled.js'
import { Heading2 } from 'styles/Title.styled.js'
import { Container } from 'styles/Container.styled.js'
import OfferSlider from './offer-slider/OfferSlider.jsx'
import OfferVectorLeft from 'assets/icons/offer-left-vectors.svg'
import OfferVectorRight from 'assets/icons/offer-right-vectors.svg'

const OfferSection = () => {
	return (
		<WrapperOffer>
			<img src={OfferVectorLeft} alt="vectors" />
			<Container>
				<Heading2>Special Offer</Heading2>
				<OfferSlider />
			</Container>
			<img src={OfferVectorRight} alt="vectors" />
		</WrapperOffer>
	)
}

export default OfferSection
