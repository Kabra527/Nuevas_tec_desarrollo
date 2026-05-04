import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Habits from "./components/Habits";
import Tips from "./components/Tips";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";

function PrivateRoute({ children }) {
  const usuario = localStorage.getItem("usuario");
  return usuario ? children : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Navigation />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/habits"
          element={
            <PrivateRoute>
              <Navigation />
              <Habits />
            </PrivateRoute>
          }
        />
        <Route
          path="/tips"
          element={
            <PrivateRoute>
              <Navigation />
              <Tips />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Navigation />
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;