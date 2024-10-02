import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Task from "./pages/task/Task";
import Blog from "./pages/blog/Blog";  
import Profile from "./pages/profile/Profile"; 

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assignment-3" element={<Task />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
