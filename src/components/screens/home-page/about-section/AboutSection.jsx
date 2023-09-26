import {
	AboutBody,
	AboutImage,
	AboutReasons,
	ReasonItem,
	WrapperAboutSection
} from './AboutSection.styled.js'
import { Heading2 } from 'styles/Title.styled.js'
import { ContainerFlexRow } from 'styles/Container.styled.js'
import { Text } from 'styles/Text.styled.js'
import AboutImage1 from 'assets/images/about-1.png'
import ReasonBurger from 'assets/icons/reason-burger.svg'
import ReasonPizza from 'assets/icons/reason-pizza.svg'
import ReasonDrink from 'assets/icons/reason-drink.svg'
import ReasonSandwich from 'assets/icons/reason-sandwich.svg'

const AboutSection = () => {
	return (
		<WrapperAboutSection>
			<ContainerFlexRow alignItems="center" gap={70}>
				<AboutImage data-aos="fade-right">
					<img src={AboutImage1} alt="cafe" />
				</AboutImage>
				<AboutBody>
					<Heading2>Why should you choose us?</Heading2>
					<Text>
						At <span>TheBurger</span>, we&apos;re not just a burger joint;
						we&apos;re an experience crafted with passion and dedication. When
						you choose us, you&apos;re choosing more than just a meal;
						you&apos;re selecting a culinary adventure that will leave your
						taste buds dancing and your heart content. Here are four compelling
						reasons why you should make us your go-to burger destination:
					</Text>
					<AboutReasons>
						<ReasonItem data-aos="fade-in">
							<img src={ReasonBurger} alt="Icon burger" />
							<p>Unparalleled Flavor</p>
						</ReasonItem>
						<ReasonItem
							data-aos="fade-in"
							data-aos-delay="150"
							data-aos-duration="5000"
						>
							<img src={ReasonPizza} alt="Icon burger" />
							<p>Variety to Suit Every Palate</p>
						</ReasonItem>
						<ReasonItem
							data-aos="fade-in"
							data-aos-delay="250"
							data-aos-duration="5000"
						>
							<img src={ReasonDrink} alt="Icon burger" />
							<p>Cozy Atmosphere and Exceptional Service</p>
						</ReasonItem>
						<ReasonItem
							data-aos="fade-in"
							data-aos-delay="350"
							data-aos-duration="5000"
						>
							<img src={ReasonSandwich} alt="Icon burger" />
							<p>Quality Beyond Compare</p>
						</ReasonItem>
					</AboutReasons>
				</AboutBody>
			</ContainerFlexRow>
		</WrapperAboutSection>
	)
}

export default AboutSection
