import styled, {ThemeProvider} from "styled-components";
import HomePage from "components/screens/home-page/HomePage.jsx";
import {GlobalStyled} from "styles/Global.styled.js";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import CatalogPage from "components/screens/catalog-page/CatalogPage.jsx";
import OrderPage from "components/screens/order-page/OrderPage.jsx";
import AboutPage from "components/screens/about-page/AboutPage.jsx";
import Error404 from "components/screens/error-page/Error404.jsx";

const WrapperApp = styled.div`
  min-height: 100%;
  overflow: clip;

  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.bgPrimary};

  main {
    flex: auto;
  }
`
const theme = {
    colors: {
        bgPrimary: '#131212',
        bgSecondary: '#111A19',
        textPrimary: '#fff',
        textSecondary: '#F2F2F2',
        textHighlighted: '#F2B63D',
    },
    fonts: {
        poppins: 'Poppins, sans-serif',
        oswald: 'Oswald, sans-serif',
    }
}

function App() {
    const [lock, setLock] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled isLockBody={lock}/>
            <WrapperApp>
                <Routes>
                    <Route path='/' element={<HomePage setLock={setLock}/>} />
                    <Route path='/catalog' element={<CatalogPage setLock={setLock} />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/order' element={<OrderPage />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </WrapperApp>
        </ThemeProvider>
    )
}

export default App