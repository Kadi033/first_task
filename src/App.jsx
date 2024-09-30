import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
