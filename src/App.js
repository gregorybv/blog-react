import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage, LoginPage, SingleBlogPage} from "./pages";
import {Navbar} from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import {Footer} from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/blog/:id" element = {<SingleBlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
