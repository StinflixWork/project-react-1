import styled from "styled-components";

export const HeroCardStyled = styled.div`
  max-width: 150px;
  min-height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  padding: 20px 15px;
  border-radius: 5px;
  border: 1px solid #1E2423;
  background: ${props => props.theme.colors.bgSecondary};
`

export const HeroCardIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282E2D;
`

export const HeroCardBody = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: 500;
  
  h5 {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 0.75rem; // 12px
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  p {
    color: #989898;
    font-size: 0.625rem; // 10px
  }
`