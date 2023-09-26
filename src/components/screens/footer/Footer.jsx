import {
	FooterBody,
	FooterContact,
	FooterContacts,
	FooterContent,
	FooterCopyRight,
	FooterNavigation,
	FooterSocials,
	SocialsLinks,
	WrapperFooter
} from './Footer.styled.js'
import { Container } from 'styles/Container.styled.js'
import Logo from 'components/ui/logo/Logo.jsx'
import EmailICon from 'assets/icons/email.svg'
import PhoneICon from 'assets/icons/phone.svg'
import LocationICon from 'assets/icons/location.svg'

import TwitterICon from 'assets/icons/twitter.svg'
import InstagramICon from 'assets/icons/instagram.svg'
import FacebookICon from 'assets/icons/facebook.svg'

const Footer = () => {
	return (
		<WrapperFooter>
			<Container>
				<FooterBody>
					<FooterContent>
						<Logo />
						<FooterCopyRight>
							© 2023 TheBurger Fast Food Website. All rights reserved.
							Developed by Vlad
						</FooterCopyRight>
					</FooterContent>
					<FooterNavigation>
						<FooterContacts>
							<FooterContact>
								<img src={EmailICon} alt="" />
								<a href="mailto:info@theburger.com">info@theburger.com</a>
							</FooterContact>
							<FooterContact>
								<img src={PhoneICon} alt="" />
								<a href="tel:+380551907702">+380 (55) 190-77-02</a>
							</FooterContact>
							<FooterContact>
								<img src={LocationICon} alt="" />
								<a href="#">info@theburger.com</a>
							</FooterContact>
						</FooterContacts>
						<FooterSocials>
							<p>Social Community</p>
							<SocialsLinks>
								<img src={TwitterICon} alt="Twitter link" />
								<img src={InstagramICon} alt="Instagram link" />
								<img src={FacebookICon} alt="Facebook link" />
							</SocialsLinks>
						</FooterSocials>
					</FooterNavigation>
				</FooterBody>
			</Container>
		</WrapperFooter>
	)
}

export default Footer
