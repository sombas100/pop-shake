import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ position: "relative", maxWidth: "50%" }}>
        <TextInput
          style={{ paddingLeft: "45px", paddingRight: "120px", width: "100%" }}
          type="text"
          icon={IoIosSearch}
          value={query}
          placeholder="Search for recipes..."
          onChange={handleChange}
        />
      </div>
      <Button
        gradientMonochrome="success"
        style={{ marginLeft: "10px" }}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
