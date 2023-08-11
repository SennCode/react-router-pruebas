import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./components/layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route element={<Inicio />} index></Route>
            <Route element={<Contacto />} path="/contacto"></Route>
            <Route element={<Blog />} path="/blog"></Route>
            <Route element={<BlogDetails />} path="/blog/:id"></Route>
            <Route element={<NotFound/>} path="/*"></Route>
          </Route>
          
        </Routes>
        
      </div>
    </>
  );
};

export default App;
