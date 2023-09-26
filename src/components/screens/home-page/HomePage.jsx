import { Header } from 'components/screens/header/Header.jsx'
import HeroSection from './hero-section/HeroSection.jsx'
import OfferSection from './offer-section/OfferSection.jsx'
import AboutSection from './about-section/AboutSection.jsx'
import StaffSection from './staff-section/StaffSection.jsx'
import Footer from 'components/screens/footer/Footer.jsx'

const HomePage = ({ setLock }) => {
	return (
		<>
			<Header setLock={setLock} />
			<main>
				<HeroSection />
				<OfferSection />
				<AboutSection />
				<StaffSection />
			</main>
			<Footer />
		</>
	)
}

export default HomePage
