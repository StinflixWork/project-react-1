import {
    HeroBody, HeroCards, HeroIllustration,
    HeroLabel,
    WrapperHero
} from "./HeroSection.styled.js";
import {ContainerFlexRow} from "styles/Container.styled.js";
import {Heading1} from "styles/Title.styled.js";
import {Text} from "styles/Text.styled.js";
import DeliveryIcon from "assets/icons/hero-delivery.svg";
import SupportIcon from "assets/icons/hero-support.svg";
import FoodIcon from "assets/icons/hero-food.svg";
import BurgerImage from "assets/images/hero-burger.png"
import BurgerVector from "assets/icons/hero-burger-vectors.svg"
import HeroCard from "./hero-card/HeroCard.jsx";

const HeroSection = () => {
    return (
        <WrapperHero>
            <ContainerFlexRow justify='space-between' gap={25}>
                <HeroBody data-aos="fade-right">
                    <HeroLabel>Every Bite is a Burst of Delicious Delight</HeroLabel>
                    <Heading1>Elevate Your Taste Buds: Welcome to <span>TheBurger</span>!</Heading1>
                    <Text>Step into a world of burger excellence at Burger Haven. Our menu is a symphony of flavors,
                        carefully composed to satisfy your cravings. Join us for an unforgettable dining experience that
                        celebrates the art of the burger. <span>Discover your new favorite today!</span></Text>
                    <HeroCards>
                        <HeroCard
                            icon={DeliveryIcon}
                            title='fast delivery'
                            text='Delivered withing 30 minutes'
                            delay='150'
                        />
                        <HeroCard
                            icon={SupportIcon}
                            title='24/7 support'
                            text='We support online 24 Hrs'
                            delay='250'
                        />
                        <HeroCard
                            icon={FoodIcon}
                            title='Cooking quality'
                            text='100% organic food stuff'
                            delay='350'
                        />
                    </HeroCards>
                </HeroBody>
                <HeroIllustration data-aos="zoom-in">
                    <img src={BurgerVector} alt="Burger background"/>
                    <img src={BurgerImage} alt="Burger image"/>
                </HeroIllustration>
            </ContainerFlexRow>
        </WrapperHero>
    );
};

export default HeroSection;