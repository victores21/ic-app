import React from "react";

//Styles
import { StyledBadge } from "./Badge.styles";

//Contains only 2 variants, Primary, Secondary
const Badge = ({ children, variant }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
