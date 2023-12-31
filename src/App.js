import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import CalendarPage from "./pages/calendar/CalendarPage";
import CreatePage from "./pages/createpage/CreatePage";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainpage/MainPage";
import NotFound from "./pages/notFound/NotFound";
import ProfileModify from "./pages/profile/ProfileModify";
import ProfilePage from "./pages/profile/ProfilePage";
import ProfilePartner from "./pages/profile/ProfilePartner";
import ReadPage from "./pages/readpage/ReadPage";

function App() {
  const [user, setUser] = useState({});

  return (
    <Routes className="App">
      {/* <Route path="/" element={<Navigate to="/intro" />} /> */}
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<MainPage user={user} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/createpage" element={<CreatePage />} />
      <Route path="/readpage" element={<ReadPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/partner" element={<ProfilePartner />} />
      <Route path="/profile/modify" element={<ProfileModify />} />
      <Route path="/hashtag/:hashtag" element={<MainPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
