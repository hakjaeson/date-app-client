import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";
import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/createpage" element={<CreatePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
