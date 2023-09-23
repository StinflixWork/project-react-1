import styled from "styled-components";

export const Heading1 = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 3rem; // 48px
  font-weight: 700;
  line-height: 120%;
  margin-top: 4px;
  margin-bottom: 10px;
  
  span {
    color: ${props => props.theme.colors.textHighlighted};
  }
  
  @media(width <= 900px) {
    font-size: 2rem; // 32px
  }
`

export const Heading2 = styled.h2`
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 2.25rem; // 36px
  font-weight: 500;
  line-height: 120%;
`