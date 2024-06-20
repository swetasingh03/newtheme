import Signin from "./pages/Auth/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Home/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
function App() {
  const Layout = () => {
    return (
      <>
        <div class="page">
          <Header />
          <Sidebar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Signin></Signin>} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
