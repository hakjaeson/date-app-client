import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/createpage" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
