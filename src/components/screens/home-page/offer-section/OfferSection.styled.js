import styled from "styled-components";

export const WrapperOffer = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.colors.bgSecondary};
  position: relative;
  
  >img {
    position: absolute;
    
    &:first-child {
      left: 0;
      bottom: -48px;
    }
    
    &:last-child {
      top: 70px;
      right: 0;
    }
  }
`