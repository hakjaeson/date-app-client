import { Route, Routes } from "react-router";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage";
import CreatePage from "./pages/createpage/CreatePage";
import Profile from "./pages/profile/Profile";
import ReadPage from "./pages/readpage/ReadPage";
import NotFound from "./pages/notFound/NotFound";
import CalendarPage from "./pages/calendar/CalendarPage";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<MainPage />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/createpage" element={<CreatePage />} />
      <Route path="/readpage" element={<ReadPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
