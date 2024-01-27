import type React from "react"

import Badge from "./styles"

const CardBadge = ({ children }: { children: string }) => {
  return <Badge>{children}</Badge>
}

export default CardBadge
