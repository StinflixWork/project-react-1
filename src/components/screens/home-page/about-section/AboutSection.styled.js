import styled from "styled-components";

export const WrapperAboutSection = styled.section`
  padding: 80px 0;
`

export const AboutImage = styled.div`
  flex: 0 0 470px;
  
  img {
    max-width: 100%;
  }
  
  @media(width <= 968px) {
    flex-shrink: 1;
  }

  @media(width < 768px) {
    display: none;
  }
`
export const AboutBody = styled.div`
  flex: 0 2 645px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  
  @media(width <= 1200px) {
    text-align: center;
  }

  @media(width < 768px) {
    flex: auto;
  }
`
export const AboutReasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 20px;
  margin-top: 10px;
`
export const ReasonItem = styled.div`
  display: inline-flex;
  column-gap: 10px;
  align-items: center;
  max-width: 340px;
  padding: 20px 30px;
  border-radius: 5px;
  border: 1px solid #1E2423;
  background-color: ${props => props.theme.colors.bgSecondary};
  
  img {
    width: 28px;
  }
  
  p {
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 0.875rem; // 14px
    line-height: 120%;
  }

  @media(width < 1215px) {
    max-width: 100%;
    flex: auto;
    justify-content: center;
  }
`