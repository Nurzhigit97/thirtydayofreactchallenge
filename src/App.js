import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./layouts/about/About";
import DummyData from "./layouts/dummyData/DummyData";
import FrontEndTehnologies from "./components/sidebarComponents/frontEndTehnologies/FrontEndTehnologies";
import GenerateNumber from "./components/sidebarComponents/generateNumber/GenerateNumber";

function scrollTop() {
  // if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //   window.scrollBy(0, -50);
  //   setTimeout(scrollTop, 10);
  // }
  //example 2
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <Header />
        <Navbar />
      </header>
      {/* asidebar */}
      <aside>
        <Sidebar />
      </aside>
      {/* Content */}
      <article>
        <Routes>
          {/* nav links */}
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/dummy" element={<DummyData />} />
          {/* sidebar links */}
          <Route path="frontendTehnologies" element={<FrontEndTehnologies />} />
          <Route path="generateNumber" element={<GenerateNumber />} />
        </Routes>
      </article>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
      <div className="arrowUp" onClick={scrollTop}>
        <i className="fa-solid fa-circle-up"></i>
      </div>
    </div>
  );
}

export default App;
