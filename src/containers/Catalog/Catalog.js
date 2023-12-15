import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import Filters from "./Filter";
import Items from "./Items";
import React, { useState, useEffect } from "react";
import { BeatLoader } from 'react-spinners';

export default function Catalog() {
    const [inputValue, setInputValue] = useState('');
    const [showSpinner, setShowSpinner] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [appliedFilter, setAppliedFilter] = useState(false);
    const [filterMenuVisible, setFilterMenuVisible] = useState(false);

    const handleInputValueChange = (value) => {
        setInputValue(value);
    };

    const onFilterChange = (category, filter) => {
        setSelectedCategory(category);
        setSelectedFilter(filter);
        setAppliedFilter(true);
    };

    const handleClearFilter = () => {
        setSelectedCategory(null);
        setSelectedFilter(null);
        setAppliedFilter(false);
        setFilterMenuVisible(false);  
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSpinner(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {showSpinner ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100vh"
                }}>
                    <BeatLoader color="#3e2323" size={15} loading={true} />
                </div>
            ) : (
                <>
                    <Layout searchLine="true" onInputValueChange={handleInputValueChange} />
                    <Filters
                        onFilterChange={onFilterChange}
                        onClearFilter={handleClearFilter}
                        selectedCategory={selectedCategory}
                        selectedFilter={selectedFilter}
                        filterMenuVisible={filterMenuVisible}
                        setFilterMenuVisible={setFilterMenuVisible}
                    />
                    <Items inputValue={inputValue} selectedCategory={selectedCategory} selectedFilter={selectedFilter} appliedFilter={appliedFilter} />
                    <Footer />
                </>
            )}
        </div>
    );
}
