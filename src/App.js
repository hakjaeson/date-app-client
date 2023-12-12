import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/createpage" element={<CreatePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
