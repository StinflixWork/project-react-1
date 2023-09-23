import styled from "styled-components";

export const WrapperHero = styled.section`
  padding: 80px 0;
  position: relative;
`

export const HeroBody = styled.div`
  flex: 0 2 605px;
  position: relative;

  @media(width <= 810px) {
    flex-basis: auto;
    padding-right: 80px;
  }
  
  @media(width <= 630px) {
    padding-right: 0;
  }
`
export const HeroLabel = styled.p`
  color: #E8FA1E;
  font-family: 'Ropa Sans', sans-serif;
  font-size: 1.25rem; // 20px
  line-height: 120%;

  @media(width <= 900px) {
    font-size: 1.125rem; // 18px
  }
`

export const HeroCards = styled.div`
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  margin-top: 50px;

  @media(width <= 630px) {
    justify-content: center;
    gap: 20px;
  }
`

export const HeroIllustration = styled.div`
  flex: 0 1 512px;
  position: relative;

  img:first-child {
    position: absolute;
    top: -76px;
    left: -83px;
  }

  img:not(:first-child) {
    max-width: 100%;
    position: relative;
    border-radius: 25px;

    @media(width <= 810px) {
      display: none;
    }
  }

  @media(width <= 810px) {
    position: absolute;

    img:first-child {
      left: -183px;
    }
  }
`