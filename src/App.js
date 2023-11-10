import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Main from "./pages/main/main";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact"
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
