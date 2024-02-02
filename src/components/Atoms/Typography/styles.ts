import styled from "styled-components";

import type { TypographyProps as Props } from "."
import { colors } from "../../Global/vars"


const H1 = styled.h1`
  color: ${colors.indianRed};
  text-align: center;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: normal;
  width: 100%;
  max-width: 33.688rem;
`

const H2 = styled.h2`
  color: ${colors.white};
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

const H3 = styled.h3<Props>`
  color: ${(props) => (props.variant === 'primary' ? colors.indianRed : colors.antiqueWhite)};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const H4 = styled.h4`
  color: ${colors.antiqueWhite};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
`
  
const P = styled.p<Props>`
  color: ${(props) => (props.variant === 'primary' ? colors.indianRed : colors.antiqueWhite)};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
  line-height: 1.375rem;
`

const Small = styled.small`
  color: ${colors.indianRed};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  max-width: 30rem;
`


export { H1, H2, H3, H4, P, Small }