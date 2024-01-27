import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
`

const LogoImg = styled.img`
  height: 3.5rem;
  object-fit: cover;
`

export { Container, LogoImg };