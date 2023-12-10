import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";

import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/createpage" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
