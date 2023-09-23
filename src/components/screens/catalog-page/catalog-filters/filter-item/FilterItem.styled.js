import styled from "styled-components";

export const FilterItemStyled = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.isActive ? '#F2B63D' : '#fff'};
  border-radius: 10px;
  transition: background-color .3s ease-out;

  color: #000;
  font-family: Ropa Sans, sans-serif;
  font-size: 1.25rem; // 20px
  
  img {
    max-width: 28px;
    height: 22px;
    margin-right: 10px;
  }
  
  &:hover {
    background-color: #F2B63D;
  }
`