import {Header} from "components/screens/header/Header.jsx";
import Footer from "components/screens/footer/Footer.jsx";
import {Container} from "styles/Container.styled.js";
import {
    AboutHomeBody, AboutHomeImage,
    AboutHomeSection,
    AboutPageStyled, AboutTasksSection, TasksSectionBody, TasksSectionCard, TasksSectionImage
} from "./AboutPage.styled.js";
import AboutImg2 from 'assets/images/about-2.jpg'
import AboutImg3 from 'assets/images/about-3.jpg'

const AboutPage = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <AboutPageStyled>
                        <AboutHomeSection data-aos="fade-in">
                            <AboutHomeBody>
                                <h2>about us</h2>
                                <p>Welcome to TheBurger - your new destination for incredibly delicious burgers and
                                    signature fast-food-style snacks! We take pride in offering our guests not only
                                    excellent food quality but also an unforgettable experience that will leave you with
                                    lasting memories.</p>
                                <p>We are always delighted to have you at TheBurger, and we hope that every visit to us
                                    brings you joy and satisfaction. Thank you for choosing us!</p>
                            </AboutHomeBody>
                            <AboutHomeImage>
                                <img src={AboutImg2} alt=""/>
                            </AboutHomeImage>
                        </AboutHomeSection>
                        <AboutTasksSection>
                            <TasksSectionImage data-aos="fade-right">
                                <img src={AboutImg3} alt=""/>
                            </TasksSectionImage>
                            <TasksSectionBody >
                                <p>What makes TheBurger a special place for our customers?</p>
                                <TasksSectionCard data-aos="fade-in">
                                    A lovingly crafted menu: Our menu is rich with a variety of burger
                                    options,
                                    ranging
                                    from classics to signature creations, featuring diverse toppings and sauces
                                    that
                                    satisfy every taste.
                                </TasksSectionCard>
                                <TasksSectionCard data-aos="fade-in">
                                    Fresh ingredients: We meticulously choose fresh ingredients to ensure
                                    unmatched
                                    taste and quality in every burger.
                                </TasksSectionCard>
                                <TasksSectionCard data-aos="fade-in">
                                    Friendly atmosphere: We aim to create a cozy and friendly environment
                                    where
                                    you can
                                    enjoy your meal in the company of friends and family.
                                </TasksSectionCard>
                                <TasksSectionCard data-aos="fade-in">
                                    Fast service: Our staff is trained to provide fast and efficient
                                    service, so
                                    you can
                                    savor your burger in no time.
                                </TasksSectionCard>
                                <TasksSectionCard data-aos="fade-in">
                                    Our commitment to quality: We take pride in delivering only the best,
                                    and we
                                    work to
                                    make each of your visits special.
                                </TasksSectionCard>
                            </TasksSectionBody>
                        </AboutTasksSection>
                    </AboutPageStyled>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default AboutPage;