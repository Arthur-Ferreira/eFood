import styled from "styled-components";

const Background = styled.section`
  height: 280px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

const BackgroundContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  z-index: 1;
  
  @media(min-width: 64rem){
    padding: 2.5rem 0;
  }
`

const H2 = styled.h2`
  color: #FFF;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

const P = styled.p`
  color: #FFF;
  font-size: 2rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`



export { Background, BackgroundContainer, H2, P }