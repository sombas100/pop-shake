import { useState } from "react";
import { Recipe } from "./types";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearch = async (query: string) => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        import.meta.env.VITE_APP_ID
      }&app_key=${import.meta.env.VITE_APP_API_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits.map((hit: any) => hit.recipe));
  };

  return (
    <BrowserRouter>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/"></Route>
        <Route path="#"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
