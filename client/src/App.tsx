import { useState } from "react";
import { Recipe } from "./types";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import Home from "./pages/Home";
import About from "./pages/About";

import BottomBar from "./components/BottomBar";

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
    <Router>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <BottomBar />
    </Router>
  );
}

export default App;
