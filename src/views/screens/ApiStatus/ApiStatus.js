import React from "react";

//Styles
// import "./style.scss";
import {
  Container,
  Content,
  Logo,
  AlertContainer,
  // Alert,
  IntervalContainer,
  IntervalButtons,
  IntervalButton,
  EndpointsListContainer,
  StatusList,
  StatusCard,
  StatusCardHelper,
} from "./ApiStatus.styles";

//Images
import LogoImage from "../../../assets/img/logo-inclusion.svg";

//Hooks
import useControllers from "../../../controllers";
import useViews from "../..";

const ApiStatus = () => {
  //Hooks
  ////SCREEN CONTROLLER
  const { useScreenHooks } = useControllers();
  const { useStatusPage } = useScreenHooks();
  const {
    status,
    error,
    loading,
    intervalTime,
    handleIntervalTime,
    removeSpecialCharacters,
  } = useStatusPage();

  //Components Hooks
  const { useComponents } = useViews();
  const { Badge, Alert } = useComponents();

  return (
    <Container className="container">
      <Content className="content">
        <Logo className="logo">
          <img src={LogoImage} alt="logo" title="logo" />
        </Logo>

        <AlertContainer>
          {!loading &&
            (error.length ? (
              <Alert variant="secondary">
                Some endpoints are experiencing issues
                <ul>
                  {error.map((err, index) => (
                    <li key={index}>{err.endpoint}</li>
                  ))}
                </ul>
              </Alert>
            ) : (
              <Alert variant="primary">All endpoints are operational</Alert>
            ))}
        </AlertContainer>

        {!loading && (
          <IntervalContainer>
            <div>Refresh time interval</div>

            <IntervalButtons>
              <IntervalButton
                active={intervalTime === 10000}
                onClick={() => handleIntervalTime(10000)}
              >
                10 Seconds
              </IntervalButton>
              <IntervalButton
                active={intervalTime === 15000}
                onClick={() => handleIntervalTime(15000)}
              >
                15 Seconds
              </IntervalButton>
            </IntervalButtons>
          </IntervalContainer>
        )}

        <EndpointsListContainer className="endpoint-list-container">
          <StatusList className="endpoint-list">
            {!loading &&
              status.map((state, index) =>
                !state.hasError ? (
                  <StatusCard key={index}>
                    <div>
                      <div>{state.endpoint}</div>
                      <StatusCardHelper>{state.data.hostname}</StatusCardHelper>
                      <StatusCardHelper>
                        {new Date(state.data.time).toLocaleString()}
                      </StatusCardHelper>
                    </div>

                    <Badge variant="primary">
                      {removeSpecialCharacters(state.data.message)}
                    </Badge>
                  </StatusCard>
                ) : (
                  <StatusCard key={index} className="endpoint">
                    <div>
                      <div>{state.endpoint}</div>
                      <StatusCardHelper hasError={state.hasError}>
                        {state.code}
                      </StatusCardHelper>
                    </div>

                    <Badge variant="secondary">Error</Badge>
                  </StatusCard>
                )
              )}
          </StatusList>
        </EndpointsListContainer>
      </Content>
    </Container>
  );
};

export default ApiStatus;
