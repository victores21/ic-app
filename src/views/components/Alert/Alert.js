import React from "react";

//Styles
import { StyledAlert } from "./Alert.styles";

const Alert = ({ children, variant }) => {
  return <StyledAlert variant={variant}>{children}</StyledAlert>;
};

export default Alert;
