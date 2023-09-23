import styled from "styled-components";

export const ProductItemStyled = styled.div`
  min-height: 342px;
  padding: 25px 20px;
  background-color: ${props => props.theme.colors.bgSecondary};
  border-radius: 10px;
  border: 1px solid #1E2423;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ProductItemImg = styled.div`
  width: 200px;
  
  img {
    width: 100%;
  }
  
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    top: -100%;
    left: 0;
    padding: 15px;
    transition: top .3s ease-out;

    h6 {
      color: ${props => props.theme.colors.textPrimary};
      font-family: ${props => props.theme.fonts.poppins};
      font-size: 1.125rem; // 18px
      font-weight: 600;
      margin-bottom: 15px;
    }

    ul {
      padding-left: 15px;

      li {
        color: ${props => props.theme.colors.textSecondary};
        font-family: ${props => props.theme.fonts.poppins};
        font-size: 0.875rem; // 14px
        list-style: disc;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  &:hover div {
    top: 0;
  }
`

export const ProductIngredientsMenu = styled.div`
    
`
export const ProductItemBody = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
`
export const ProductItemDescription = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  text-align: center;
  font-size: 1.25rem; // 20px
  font-weight: 500;
`
export const ProductItemPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 0.875rem; // 14px  
  }

  button {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #ff001e;
    display: flex;
    align-items: center;
    gap: 5px;

    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 0.75rem; // 12px
    font-weight: 500;
    text-transform: capitalize;
    transition: all .3s ease-out;

    &:hover {
      background-color: rgb(255, 0, 31);
    }

    &.active {
      background-color: rgb(255, 0, 31);
    }
  }
`