import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 18.625rem;
  background-color: #FFEBD9;
  text-align: center;
`

const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`

const Small = styled.small`
  color: #E66767;
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  max-width: 30rem;
`


export { StyledFooter, SocialMedia, Small };