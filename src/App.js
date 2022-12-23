import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BirthdayReminder from "./Pages/Birthday Reminder/BirthdayReminder";
import Tours from "./Pages/Tours/Tours";
import Reviews from "./Pages/Reviews/Reviews";
import Menu from "./Pages/Menu/Menu";
import Experience from "./Pages/Experience/Experience";
import ParaGenerator from "./Pages/ParaGenerator/ParaGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/birthday-reminder"
          exact
          element={<BirthdayReminder />}
        ></Route>
        <Route path="/tours" exact element={<Tours />}></Route>
        <Route path="/reviews" exact element={<Reviews />}></Route>
        <Route path="/menus" exact element={<Menu />}></Route>
        <Route path="/experience" exact element={<Experience />}></Route>
        <Route path="/para-generator" exact element={<ParaGenerator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
