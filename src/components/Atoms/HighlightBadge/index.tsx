import type React from "react"

import Badge from "./styles"

const HighlightBadge = ({ children }: { children: string }) => {
  return <Badge>{children}</Badge>
}

export default HighlightBadge
