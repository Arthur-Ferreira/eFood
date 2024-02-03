import styled from "styled-components";

import { colors } from "../../Global/vars";

const StyledFooter = styled.footer`
  height: 18.625rem;
  background-color: ${colors.antiqueWhite};
  text-align: center;
`

const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`


export { StyledFooter, SocialMedia };