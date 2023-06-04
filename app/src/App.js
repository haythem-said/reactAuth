import "./App.css";
import AdminRouter from "./componentsRouter/AdminRouter";
import PrivateRouter from "./componentsRouter/PrivateRouter";
import Login from "./pages/Login";
import NotAccess from "./pages/NoAccess";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRouter from "./componentsRouter/LoginRouter";
function App() {
  const user = {
    isConnected: false,
    role: "USER",
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter user={user}>
                <Profile />
              </PrivateRouter>
            }
          />
          <Route
            path="/login"
            element={
              <LoginRouter user={user}>
                <Login />
              </LoginRouter>
            }
          />
          <Route
            path="/register"
            element={
              <LoginRouter user={user}>
                <Register />
              </LoginRouter>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRouter user={user}>
                <Admin />
              </AdminRouter>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NotAccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
