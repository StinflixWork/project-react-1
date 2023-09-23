import {WrapperHeader} from "./Header.styled.js";
import {ContainerFlexRow} from "styles/Container.styled.js";
import Logo from "components/ui/logo/Logo.jsx";
import Navigation from "components/screens/header/navigation/Navigation.jsx";


export const Header = ({setLock}) => {
    return (
        <WrapperHeader>
            <ContainerFlexRow justify='space-between' alignItems='center' gap={30}>
                <Logo />
                <Navigation setLock={setLock} />
            </ContainerFlexRow>
        </WrapperHeader>
    );
};