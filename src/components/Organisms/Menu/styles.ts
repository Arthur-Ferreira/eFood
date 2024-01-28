import styled from "styled-components";
import background from "../../../public/logoBackground.svg"

const StyledHeader = styled.header`
  height: 24rem;
  background: url(${background});
  text-align: center;
`

const H1 = styled.h1`
  color: #E66767;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: normal;
  width: 100%;
  max-width: 33.688rem;
`

export { StyledHeader, H1 };