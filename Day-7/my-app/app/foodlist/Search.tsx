"use client";

import { useState } from "react";

interface Food {
    id: number;
    name: string;
    price: number;
}

const foods: Food[] = [
    { id: 1, name: "apple", price: 10 },
    { id: 2, name: "banana", price: 3 },
    { id: 3, name: "orange", price: 5 }
];

function FoodList() {
    const [search, setSearch] = useState("");

    const filteredItems = foods.filter((food: Food) => {
        return food.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div style={{ padding: "20px" }}>
            <h1>Search Item</h1>
            
            <label htmlFor="search">Search: </label>
            <input 
                id="search"
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="type here..."
            />

            <ul>
                {filteredItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FoodList;
