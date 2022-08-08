import styled from "styled-components";

export const StyledBadge = styled.div.attrs({
  className: "StyledBadge",
})`
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.875rem;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return "background: #27ae60; color: #fff;";
      case "secondary":
        return "background: #ff084a; color: #fff;";
      default:
        return "background: #ff084a; color: #fff;";
    }
  }}
`;
