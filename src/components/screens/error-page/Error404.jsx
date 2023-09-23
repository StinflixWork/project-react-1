import {Heading2} from "styles/Title.styled.js";
import styled from "styled-components";
import {Text} from "styles/Text.styled.js";
import {NavLink} from "react-router-dom";

const WrapperErrorPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  a {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`

const Error404 = () => {
    return (
        <WrapperErrorPage>
            <Heading2>Oops... 404</Heading2>
            <Text>Page not found. <NavLink to='/'>Back to home</NavLink></Text>
        </WrapperErrorPage>
    );
};

export default Error404;