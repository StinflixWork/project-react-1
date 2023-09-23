import {Header} from "components/screens/header/Header.jsx";
import {Container} from "styles/Container.styled.js";
import styled from "styled-components";
import CatalogFilters from "./catalog-filters/CatalogFilters.jsx";
import CatalogProducts from "./catalog-products/CatalogProducts.jsx";

const CatalogContentStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

const CatalogPage = ({setLock}) => {
    return (
        <>
            <Header setLock={setLock} />
            <main>
                <Container>
                    <CatalogContentStyled>
                        <CatalogFilters />
                        <CatalogProducts />
                    </CatalogContentStyled>
                </Container>
            </main>
        </>
    );
};

export default CatalogPage;