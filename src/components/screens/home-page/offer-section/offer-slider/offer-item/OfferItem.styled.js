import styled from "styled-components";

export const OfferItemStyled = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 80px;
  padding-left: 30px;
  
  @media(width < 768px) {
    flex-wrap: wrap;
    gap: 25px;
    padding-left: 0;
  }
`

export const OfferItemImage = styled.div`
  flex: 0 1 450px;
  position: relative;
  
  img {
    max-width: 100%;
  }
  
  img:first-child {
    position: absolute;
    top: -45px;
    left: -10px;
  }
  
  img:last-child {
    position: relative;
  }

  @media(width < 768px) {
    flex-basis: 350px;
  }
`
export const OfferItemContent = styled.div`
    
`

export const SliderContentPrice = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 28px;

  span {
    color: ${props => props.theme.colors.textSecondary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 1.5rem; // 24px
    line-height: 120%;
  }

  @media(width < 470px) {
    span {
      font-size: 1.25rem; // 20px
    }
  }
`

export const SliderContentInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  h3 {
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 2.5rem; // 40px
    font-weight: 700;
    line-height: 120%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 1.25rem; // 20px
    font-weight: 300;
    line-height: 120%;
  }

  ul {
    display: inline-flex;
    flex-wrap: wrap;
    column-gap: 5px;
    width: 300px;
    margin-top: 8px;

    li {
      color: ${props => props.theme.colors.textSecondary};
      font-family: ${props => props.theme.fonts.poppins};
      font-size: 1rem; // 16px
      line-height: 120%;
    }
  }
  
  @media(width < 470px) {
    h5 {
      font-size: 2rem; // 32px
    }
  }
`