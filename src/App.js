import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";
import Profile from "./pages/profile/Profile";
import ReadPage from "./pages/readpage/ReadPage";

function App() {
  return (
    <Routes>
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/createpage" element={<CreatePage />} />
      <Route path="/readpage" element={<ReadPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
