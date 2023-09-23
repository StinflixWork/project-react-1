import styled from "styled-components";

export const AboutPageStyled = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
`

export const AboutHomeSection = styled.div`
  display: flex;
  gap: 30px;
  @media(width <= 868px) {
    flex-direction: column;
  }
`

export const AboutHomeBody = styled.div`
  font-family: ${props => props.theme.fonts.poppins};
  flex: 0 1 50%;

  h2 {
    color: ${props => props.theme.colors.textPrimary};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 20px;
    line-height: 140%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`

export const AboutHomeImage = styled.div`
  flex: 0 1 600px;
  border-radius: 25px;
  overflow: hidden;
  
  img {
    max-width: 100%;
  }

  @media(width <= 868px) {
    flex-basis: auto;
  }
`

export const AboutTasksSection = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
`

export const TasksSectionBody = styled.div`
  flex: 0 1 50%;

  p {
    font-family: Ropa Sans, sans-serif;
    color: ${props => props.theme.colors.textSecondary};
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 40px;
  }

  @media(width <= 868px) {
    flex-basis: auto;
  }
`

export const TasksSectionCard = styled.div`
  display: inline-flex;
  column-gap: 10px;
  align-items: center;
  padding: 20px 30px;
  border-radius: 5px;
  border: 1px solid #1E2423;
  background-color: ${props => props.theme.colors.bgSecondary};
  
  color: #ac9a9a;
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 0.875rem; // 14px
  line-height: 120%;
  transition: all .3s ease;

  &:hover {
    box-shadow: 4px 4px 10px -3px #1E2423;
  }
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media(width <= 868px) {
    width: 100%;
  }
`


export const TasksSectionImage = styled.div`
  flex: 0 1 50%;
  border-radius: 10px;
  overflow: hidden;
  height: 600px;
  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(width <= 868px) {
    display: none;
  }
`