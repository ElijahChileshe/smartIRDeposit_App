import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/registration/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/registration/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route 
              path="/register"
              element={<Register />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
