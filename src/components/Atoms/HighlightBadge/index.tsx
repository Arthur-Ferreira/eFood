import type React from "react"

import Badge from "./styles"

const HighlightBadge = ({ destacado }: { destacado: boolean }) => {
  if(destacado === true){
    return (
      <Badge>Destaque da semana</Badge>
    )
  }
}

export default HighlightBadge
