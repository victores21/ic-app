import useComponents from "./components";
import useScreens from "./screens";

const useViews = () => {
  return {
    useScreens,
    useComponents,
  };
};

export default useViews;
