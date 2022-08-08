import axios from "axios";

const useApiStatusServices = () => {
  //Fetch specific api status
  const getApiStatusService = async (api) => {
    const request = axios({
      method: "GET",
      url: `https://api.factoryfour.com/${api}/health/status`,
    });
    return request;
  };

  // Fetch all apis statuses
  const getAllApisStatusService = async () => {
    const listOfApis = [
      "accounts",
      "assets",
      "customers",
      "datapoints",
      "devices",
      "documents",
      "forms",
      "invites",
      "media",
      "messages",
      "namespaces",
      "orders",
      "patients",
      "relationships",
      "rules",
      "templates",
      "users",
      "workflows",
    ];
    const promises = listOfApis.map((api) => getApiStatusService(api));
    const results = await Promise.allSettled(promises);

    return results;
  };

  return {
    getApiStatusService,
    getAllApisStatusService,
  };
};

export default useApiStatusServices;
