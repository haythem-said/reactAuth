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
import { useSelector } from "react-redux";
import { SET_USER } from "./redux/types";
import jwtDecode from "jwt-decode";
import store  from "./redux/store";
if (localStorage.jwt) {
  const decode = jwtDecode(localStorage.jwt);
  store.dispatch({ type: SET_USER, payload: decode });
}

function App() {
  const selectorUser = useSelector((state) => state.auth);
  const user = {
    isConnected: selectorUser.isConnected,
    role: selectorUser.user.role,
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
