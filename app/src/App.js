import "./App.css";
import AdminRouter from "./componentsRouter/AdminRouter";
import PrivateRouter from "./componentsRouter/PrivateRouter";
import Login from "./pages/Login";
import NotAccess from "./pages/NoAccess";
import NotFound from "./pages/NotFound";
import ProfileBegginner from "./pages/ProfileBegginner";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import LoginRouter from "./componentsRouter/LoginRouter";
import { useSelector } from "react-redux";
import { SET_USER } from "./redux/types";
import jwtDecode from "jwt-decode";
import store from "./redux/store";
import ProfileMedium from "./pages/ProfileMedium";
import ProfileHard from "./pages/ProfileHard";

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
              // <PrivateRouter user={user}>
              <Login />
              // </PrivateRouter>
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
          <Route path="/meduim" element={<ProfileMedium />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/hard" element={<ProfileHard />}></Route>
          <Route path="/noaccess" element={<NotAccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
