import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Filter.styled"; 

export default function Filters({ onFilterChange, onClearFilter, selectedCategory, selectedFilter, filterMenuVisible, setFilterMenuVisible }) {
    const [selectedFilterCategory, setSelectedFilterCategory] = useState(null);
    const [selectedFilterValue, setSelectedFilterValue] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedFilterCategory(category);
        setSelectedFilterValue(null);
        onFilterChange(category, null);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilterValue(filter);
        onFilterChange(selectedFilterCategory, filter);
    };

    return (
        <div style={styles.filterButtonsContainer}>
            <div style={{ display: "flex" }}>
                {["mark", "carat"].map((category) => (
                    <div key={category}>
                        <button
                            style={{
                                ...styles.button,
                                ...(selectedFilterCategory === category && styles.activeButton),
                                ...styles.largerButton,
                            }}
                            onClick={() => {
                                handleCategoryChange(category);
                                setFilterMenuVisible(!filterMenuVisible);
                            }}
                        >
                            {category}
                        </button>
                        {selectedFilterCategory === category && filterMenuVisible && (
                            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                                {category === "mark" ? (
                                    ["Diamond", "Rubin", "Sapphire", "Shpinel"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                ) : category === "carat" ? (
                                    ["0.8", "1", "1.8"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                ) : category === "description" (
                                    ["ASUS", "ACER", "Lenovo", "MacBook"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <Button
                    style={{ ...styles.button, ...(selectedFilterCategory === null && styles.activeButton) }}
                    onClick={() => {
                        onClearFilter();
                        setFilterMenuVisible(false); 
                    }}
                >
                    Clear Filter
                </Button>
            </div>
        </div>
    );
}
