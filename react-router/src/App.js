import "./App.css";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  let myPerson = "Muto";

  return (
    <div className='App'>
      <Header />
      <Routes>
        {/* the path comes from Header where it has <Link to=/> and connects it to Pages... */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage myPerson={myPerson} />} />
      </Routes>
    </div>
  );
}

export default App;
