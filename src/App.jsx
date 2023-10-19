import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/homepage";
import Blog from "./pages/blogs";
import Header from './components/Header';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
    <ToastContainer/>
   <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
