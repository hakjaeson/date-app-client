import { Route, Routes } from "react-router";
import "../src/styles/common/App.css";
import MainPage from "./pages/mainpage/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
