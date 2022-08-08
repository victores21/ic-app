import { useState, useEffect } from "react";
import useApi from "../../../api";

const useStatusPage = () => {
  //STATES
  const [status, setStatus] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [intervalTime, setIntervalTime] = useState(10000);

  //HOOKS
  const { useServices } = useApi();
  const { useApiStatusServices } = useServices();
  const { getAllApisStatusService } = useApiStatusServices();

  //Functions
  const getApiNameFromURL = (api) => {
    const apiName = api.split(".com/")[1].split("/")[0];
    return apiName;
  };

  const handleIntervalTime = (time) => {
    setIntervalTime(time);
  };

  const removeSpecialCharacters = (str) => {
    return str.replace(/[^a-zA-Z]/g, "");
  };
  //USE EFFECTS
  //   First Loading
  useEffect(() => {
    getAllApisStatusService().then((res) => {
      res.forEach((data) => {
        //IF CALL IS OK
        if (data.status === "fulfilled") {
          //Adds endpoint data to Status state
          setStatus((prevStatus) => [
            ...prevStatus,
            {
              data: data.value.data,
              hasError: false,
              endpoint: getApiNameFromURL(data.value.config.url),
            },
          ]);
        } else {
          //If endpoint has error adds it to Error state & Status state
          setStatus((prevStatus) => [
            ...prevStatus,
            {
              hasError: true,
              code: data.reason.code,
              endpoint: getApiNameFromURL(data.reason.config.url),
            },
          ]);
          setError((prevErr) => [
            ...prevErr,
            { endpoint: getApiNameFromURL(data.reason.config.url) },
          ]);
        }
      });

      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Interval to check the endpoints every (10-15s) seconds
    const newData = setInterval(() => {
      let newStatus = [];
      let newErrors = [];

      getAllApisStatusService().then((res) => {
        res.forEach((data) => {
          //If endpoints are ok add it to newStatus variable
          if (data.status === "fulfilled") {
            newStatus.push({
              data: data.value.data,
              hasError: false,
              endpoint: getApiNameFromURL(data.value.config.url),
            });
          } else {
            //If endpoints are not ok add it to newStatus variable
            newStatus.push({
              hasError: true,
              code: data.reason.code,
              endpoint: getApiNameFromURL(data.reason.config.url),
            });
            //If endpoints are ok add it to newErrors variable
            newErrors.push({
              endpoint: getApiNameFromURL(data.reason.config.url),
            });
          }
        });

        //Update the states with the new data
        setStatus(newStatus);
        setError(newErrors);

        //Clear local vars
        newStatus = [];
        newErrors = [];
      });
    }, intervalTime);

    // Clear Interval
    return () => clearInterval(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalTime]);

  return {
    status,
    setStatus,
    error,
    setError,
    loading,
    setLoading,
    intervalTime,
    setIntervalTime,
    getApiNameFromURL,
    handleIntervalTime,
    removeSpecialCharacters,
  };
};

export default useStatusPage;
