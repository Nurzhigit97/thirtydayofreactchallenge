import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./layouts/About";

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
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </article>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
