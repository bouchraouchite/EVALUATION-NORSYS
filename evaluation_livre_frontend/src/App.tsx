import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import BookPage from "./page/BookPage";
import UserPage from "./page/UserPage";
import EmpreintesPage from "./page/EmpreintesPage";
import UserForm from "./form/UserForm";
import BookForm from "./form/BookForm";
import EmpreinteForm from "./form/EmpreinteForm";
import "./App.css";
import { GiBurningBook } from "react-icons/gi";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <ul>
            <li>
              <GiBurningBook size={60} />
              <Link to={"/"} className="large-text">
                AppLivre
              </Link>
            </li>
            <li>
              <Link to={"/book"}>Livres</Link>
            </li>
            <li>
              <Link to={"/user"}>Utilisateurs</Link>
            </li>
            <li>
              <Link to={"/emp"}>Empreintes</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/emp" element={<EmpreintesPage />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/empform" element={<EmpreinteForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
