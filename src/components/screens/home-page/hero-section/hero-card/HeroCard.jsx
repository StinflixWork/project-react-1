import {
	HeroCardBody,
	HeroCardIcon,
	HeroCardStyled
} from './HeroCard.styled.js'

const HeroCard = ({ icon, title, text, delay }) => {
	return (
		<HeroCardStyled
			data-aos="fade-right"
			data-aos-delay={delay}
			data-aos-duration="5000"
		>
			<HeroCardIcon>
				<img src={icon} alt="Delivery icon" />
			</HeroCardIcon>
			<HeroCardBody>
				<h5>{title}</h5>
				<p>{text}</p>
			</HeroCardBody>
		</HeroCardStyled>
	)
}

export default HeroCard
