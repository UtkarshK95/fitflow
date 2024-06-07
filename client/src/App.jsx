import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomNavbar from "./components/Navbar";
import UpdateWorkout from "./pages/UpdateWorkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<UpdateWorkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
