import styled from "styled-components";

const LogoStyled = styled.p`
  font-family: ${props => props.theme.fonts.oswald};
  color: ${props => props.theme.colors.textPrimary};
  font-size: 1.5rem; // 24px
  font-weight: 700;
  z-index: 100;
  
  span {
    color: ${props => props.theme.colors.textHighlighted};
  }
`

const Logo = () => <LogoStyled><span>The</span>BURGER</LogoStyled>;

export default Logo;