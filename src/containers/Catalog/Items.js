import React, { useEffect, useState } from "react";
import styles from "./Items.styled";
import { getAllStone } from "../../API/api";
import CardItem from "../../components/CardItem/CardItem";

export default function Items(props) {
    const [filteredStones, setFilteredStones] = useState([]);

    useEffect(() => {
        const fetchStone = async () => {
            try {
                const response = await getAllStone();
                let stonesToDisplay = [...response.data];

                if (typeof props.selectedFilter === 'string') {
                    if (props.selectedFilter === "carat") {
                        stonesToDisplay.sort((a, b) => a.description.localeCompare(b.description));
                    } else if (props.selectedFilter === "description") {
                        stonesToDisplay.sort((a, b) => a.carat.localeCompare(b.carat));
                    } else if (props.selectedFilter === "price") {
                        stonesToDisplay.sort((a, b) => a.price - b.price);
                    }
                }

                if (props.appliedFilter) {
                    const filtered = stonesToDisplay.filter(
                        stone =>
                            stone.mark.toLowerCase().includes(props.inputValue.toLowerCase()) &&
                            ((props.selectedCategory === "mark" && stone.mark.toLowerCase() === props.selectedFilter.toLowerCase()) ||
                            (props.selectedCategory === "carat" && stone.carat.toLowerCase() === props.selectedFilter.toLowerCase()) ||
                            (props.selectedCategory === "description" && stone.description.toLowerCase() === props.selectedFilter.toLowerCase()))
                    );
                    setFilteredStones(filtered);
                } else {
                    setFilteredStones(stonesToDisplay);
                }
            } catch (error) {
                console.error("Помилка завантаження даних про коштовні камені:", error);
            }
        };

        fetchStone();
    }, [props.inputValue, props.selectedCategory, props.selectedFilter, props.appliedFilter]);

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {filteredStones.map(stone => (
                    <CardItem
                        id={stone.id}
                        mark={stone.mark}
                        carat={stone.carat}
                        imageSrc={stone.imageSrc}
                        description={stone.description}
                        price={stone.price}
                        key={stone.id}
                        viewButton={true}
                    />
                ))}
            </div>
        </div>
    );
}
