import "./App.css";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Header from "./pages/Theme/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Theme/layout";
import UserManagement from "./pages/UserManagement";
import Menu from "./pages/Menu";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <FAQ/>
      <Home/>
      <Layout/> */}
      <Header />

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/user-management" element={<UserManagement />}
              />
              <Route path="/FAQ" element={<FAQ/>} />
              <Route path="/menu" element={<Menu/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
