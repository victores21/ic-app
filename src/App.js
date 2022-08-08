import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScreens from "./views/screens";

function App() {
  const { ApiStatus } = useScreens();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
