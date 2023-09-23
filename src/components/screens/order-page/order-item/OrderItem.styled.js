import styled from "styled-components";

export const OrderItemStyled = styled.div`
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${props => props.theme.colors.bgSecondary};
  border: 1px solid #1E2423;
  border-radius: 3px;
`

export const OrderItemImg = styled.div`
    width: 100px;
  
  img {
    width: 100%;
  }
`
export const OrderItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const OrderItemInfo = styled.div`
  h5 {
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 1.25rem; // 20px
    margin-bottom: 5px;
    line-height: 120%;
  }
  
  p {
    font-family: ${props => props.theme.fonts.poppins};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.875rem; // 14px
    font-weight: 300;
  }
  
  @media(width <= 768px) {
    h5 {
      font-size: 1.125rem; // 18px
    }
  }
`
export const OrderItemButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 100%;

    span {
      font-family: ${props => props.theme.fonts.oswald};
      color: ${props => props.theme.colors.textPrimary};
      font-size: 0.875rem; // 14px
      font-weight: 500;
    }

  @media(width <= 768px) {
    justify-content: center;
  }
`

export const OrderItemCounters = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  button {
    width: 22px;
    height: 22px;

    &:active svg {
      fill: ${props => props.theme.colors.textHighlighted};
    }
  }
`

export const OrderItemAllPrice = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-right: 20px;
  border-right: 1px solid rgba(159, 159, 159, 0.6);
  
  p {
    font-family: ${props => props.theme.fonts.poppins};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.875rem; // 14px
    font-weight: 300;
    
    span {
      font-family: ${props => props.theme.fonts.oswald};
      color: ${props => props.theme.colors.textPrimary};
      font-size: 1rem; // 16px
      margin-right: 10px;
      letter-spacing: 1px;
    }
  }
`