import styled from "styled-components";

export const Text = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 1rem; // 16px
  line-height: 150%;
  

  span {
    color: ${props => props.theme.colors.textHighlighted};
  }

  @media(width <= 900px) {
    font-size: 0.875rem; // 14px
  }
`