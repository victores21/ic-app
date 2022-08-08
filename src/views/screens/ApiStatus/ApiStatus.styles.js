import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "Container",
})`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  width: 100%;
  max-width: 850px;
  background: #fff;
  padding: 1rem;
`;

export const Logo = styled.div.attrs({
  className: "Logo",
})`
  max-width: 300px;
  margin-bottom: 2rem;
`;

//ALERTS
export const AlertContainer = styled.div.attrs({
  className: "AlertContainer",
})`
  margin-bottom: 4rem;
`;

export const Alert = styled.div.attrs({
  className: "Alert",
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

//INTERVAL
export const IntervalContainer = styled.div.attrs({
  className: "IntervalContainer",
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const IntervalButtons = styled.div.attrs({
  className: "IntervalButtons",
})`
  display: flex;
`;

export const IntervalButton = styled.div.attrs({
  className: "IntervalButton",
})`
  padding: 0.5rem;
  border-radius: 5px;
  background: none;
  border: 1px solid #72767d;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    transition: 0.3s;
    color: #fff;
    background: #56595f;
  }

  ${(props) => {
    switch (props.active) {
      case true:
        return "background: #27ae60;color: #fff; border: 1px solid #27ae60;";
      case false:
        return "background: none;  border: 1px solid #72767d;";
      default:
        return "background: none;  border: 1px solid #72767d;";
    }
  }}
`;

//ENDPOINT LIST
export const EndpointsListContainer = styled.div.attrs({
  className: "EndpointsListContainer",
})`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const StatusList = styled.ul.attrs({
  className: "StatusList",
})`
  list-style: none;
  padding-left: 0;
`;

export const StatusCard = styled.li.attrs({
  className: "StatusCard",
})`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const StatusCardHelper = styled.div.attrs({
  className: "StatusCardHelper",
})`
  color: #72767d;
  font-size: 12px;

  ${(props) => {
    switch (props.hasError) {
      case true:
        return "color:#ff084a;";
      case false:
        return "color: #72767d;";
      default:
        return "color: #72767d;";
    }
  }}
`;

// export const Badge = styled.div.attrs({
//   className: "Badge",
// })`
//   padding: 0.5rem;
//   border-radius: 5px;
//   font-size: 0.875rem;

//   ${(props) => {
//     switch (props.variant) {
//       case "primary":
//         return "background: #27ae60; color: #fff;";
//       case "secondary":
//         return "background: #ff084a; color: #fff;";
//       default:
//         return "background: #ff084a; color: #fff;";
//     }
//   }}
// `;
