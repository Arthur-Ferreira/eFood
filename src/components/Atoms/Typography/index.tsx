import { H1, H2, H3, H4, P, Small } from "./styles"

export interface TypographyProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export const TypographyH1: React.FC<TypographyProps> = ({
  children,
}) => {
  return <H1>{children}</H1>
}

export const TypographyH2: React.FC<TypographyProps> = ({
  children,
}) => {
  return <H2>{children}</H2>
}

export const TypographyH3: React.FC<TypographyProps> = ({
  children,
  variant = "primary",
}) => {
  return (
    <H3 variant={variant}>
      {children}
    </H3>
  )
}

export const TypographyH4: React.FC<TypographyProps> = ({
  children,
}) => {
  return <H4>{children}</H4>
}

export const TypographyP: React.FC<TypographyProps> = ({
  children,
  variant = "primary",
}) => {
  return (
    <P variant={variant}>
      {children}
    </P>
  )
}

export const TypographySmall: React.FC<TypographyProps> = ({
  children,
}) => {
  return <Small>{children}</Small>
}
