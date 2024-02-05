import { H1, H2, H3, H4, P, Small } from "./styles"

export interface TypographyProps {
  children: React.ReactNode
  $variant?: 'primary' | 'secondary'
}

const TypographyH1: React.FC<TypographyProps> = ({ children }) => {
  return <H1>{children}</H1>
}

const TypographyH2: React.FC<TypographyProps> = ({ children }) => {
  return <H2>{children}</H2>
}

const TypographyH3: React.FC<TypographyProps> = ({ children }) => {
  return <H3>{children}</H3>
}

const TypographyH4: React.FC<TypographyProps> = ({ children }) => {
  return <H4>{children}</H4>
}

const TypographyP: React.FC<TypographyProps> = ({ children }) => {
  return <P>{children}</P>
}


const TypographySmall: React.FC<TypographyProps> = ({ children, $variant }) => {
  return <Small $variant={$variant}>{children}</Small>
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
}
