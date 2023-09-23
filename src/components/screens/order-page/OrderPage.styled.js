import styled from "styled-components";

export const WrapperOrder = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const OrderBody = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  
  @media(width < 1200px) {
    flex-direction: column;
  }
`

export const OrderHeader = styled.header`
  width: 100%;
  height: 80px;
`

export const OrderContent = styled.main`
  padding: 25px 0;
  flex: auto;
`

export const OrdersList = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  
  > p {
    font-family: ${props => props.theme.fonts.poppins};
    color: ${props => props.theme.colors.textSecondary};
    
    a {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media(width <= 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }
  
`