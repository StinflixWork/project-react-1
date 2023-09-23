import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavigationWrapper = styled.div``
export const NavigationStyled = styled.nav`
  @media (width >= 600px) {
    display: flex;
    column-gap: 120px;
    align-items: center;
  }

  @media (width < 600px) {
    position: absolute;
    padding: 105px 15px 80px;
    width: 100%;
    height: 100%;
    top: ${props => props.isActiveBurger ? '0' : '-100%'};
    left: 0;
    background-color: #000;
    z-index: 50;
    transition: top .3s ease-out;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
    }
  }
`
export const NavigationListStyled = styled.ul`
  display: flex;
  gap: 30px;

  li a {
    font-family: ${props => props.theme.fonts.oswald};
    color: ${props => props.theme.colors.textPrimary};
    font-size: 0.875rem; // 14px
    text-transform: uppercase;
    position: relative;
    transition: color .3s ease-out;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      left: 0;
      bottom: -4px;
      background-color: ${props => props.theme.colors.textHighlighted};
      transition: width .3s ease-out;
    }

    &:hover {
      color: ${props => props.theme.colors.textHighlighted};

      &:before {
        width: 100%;
      }
    }
  }

  @media (width < 600px) {
    flex-direction: column;
    align-items: center;
    height: 100%;

    li a {
      font-size: 1.5rem; // 24px
    }
  }
`
export const NavigationCartStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 2px;
    cursor: pointer;
    transition: color .3s ease-out;

    &:hover {
      color: ${props => props.theme.colors.textHighlighted};
    }
  }

  span {
    font-family: ${props => props.theme.fonts.oswald};
    color: ${props => props.theme.colors.textPrimary};
    font-size: 0.875rem; // 14px
    text-transform: uppercase;
  }

  @media (width < 600px) {
    justify-content: center;
    
    span {
      font-size: 1.125rem; // 18px  
    }
  }
`
export const BurgerIcon = styled.div`
  width: 32px;
  height: 16px;
  position: relative;
  z-index: 50;
  display: none;

  &:before,
  &:after,
  span {
    position: absolute;
    width: 100%;
    height: 10%;
    left: 0;
    background-color: ${props => props.theme.colors.textPrimary};
    transition: all .5s ease-out;
  }

  &:before,
  &:after {
    content: '';
  }

  &:before {
    top: ${props => props.isActive ? '50%' : 0};
    transform: ${props => props.isActive && 'rotate(45deg) translateY(-50%)'};
  }

  span {
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.isActive && 0};
    transition: all .3s ease-out;
  }

  &:after {
    bottom: ${props => props.isActive ? '50%' : 0};
    transition: all .2s linear;
    transform: ${props => props.isActive && 'rotate(-45deg) translateY(50%)'};
  }

  &:hover:not(${props => !props.isActive}) {
    span {
      width: 50%;
    }

    &:after {
      width: 25%;
    }
  }

  @media (width < 600px) {
    display: block;
  }
`

export const LinkStyled = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.textHighlighted};

    &:before {
      width: 100%;
    }
  }
`