import styled from "styled-components";

export const StyledAlert = styled.div.attrs({
  className: "StyledAlert",
})`
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;

  ul {
    margin-bottom: 0;
    margin-top: 0.5rem;
    li {
      padding-bottom: 0.5rem;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return "background:#27ae60";
      case "secondary":
        return "background:#ff084a";
      default:
        return "background:#fff";
    }
  }}
`;
