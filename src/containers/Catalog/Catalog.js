import React, { useState } from "react";
import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import Items from "./Items";
import styles from "./Filter.styled";

const characteristics = {
  carat: ["0.8", "1", "1.8"],
  Manufacturer: ["Diamond", "Rubin", "Sapphire", "Shpinel"],
};

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (category, filter) => {
    if (selectedCategory === category && selectedFilter === filter) {
      return;
    }

    if (selectedCategory === category) {
      setSelectedFilter(filter);
    } else {
      setSelectedCategory(category);
      setSelectedFilter(filter);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Layout searchLine={true} searchTerm={searchTerm} onSearchChange={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: "10px" }}
        />
      </Layout>
      <div style={styles.filterButtonsContainer}>
        <div style={{ display: "flex" }}>
          {Object.keys(characteristics).map((category) => (
            <div key={category}>
              <button
                style={{
                  ...styles.button,
                  ...(selectedCategory === category && styles.activeButton),
                  ...styles.largerButton,
                }}
                onClick={() => handleFilterChange(category, null)}
              >
                {category}
              </button>
              {selectedCategory === category && (
                <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                  {characteristics[category].map((char) => (
                    <li
                      key={char}
                      style={{
                        ...styles.button,
                        ...(selectedFilter === char && styles.activeButton),
                      }}
                      onClick={() => handleFilterChange(category, char)}
                    >
                      {char}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button
          style={{ ...styles.button, ...(selectedCategory === null && styles.activeButton) }}
          onClick={() => {
            setSelectedFilter(null);
            setSelectedCategory(null);
          }}
        >
          Clear Filter
        </button>
      </div>
      <Items filter={selectedFilter} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
