import React, { useState } from "react";
import "./productsList.css";

const products = [
  { id: 1, name: "Product 1", price: 50, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 30, category: "Clothing", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 20, category: "Clothing", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", price: 70, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product 5", price: 40, category: "Accessories", image: "https://via.placeholder.com/150" }
];

const ProductsList = () => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSortChange = (event) => {
    const value = event.target.value;
    const sorted = [...products].sort((a, b) => {
      if (value === "lowToHigh") {
        return a.price - b.price;
      } else if (value === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedProducts(sorted);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    const filtered = value === "All" ? products : products.filter(product => product.category === value);
    setSortedProducts(filtered);
  };

  return (
    <div>
      <div className="filters">
        <select onChange={handleSortChange}>
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <select onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Electronics">Phone</option>
          <option value="Clothing">Laptop</option>
          <option value="Accessories">Tablet</option>
          <option value="Clothing">Tv</option>
          <option value="Clothing">Cloths</option>
          <option value="Clothing">Earphone</option>
          <option value="Clothing">Charger</option>
          <option value="Clothing">Mouse</option>
          <option value="Clothing">Speakers</option>
        </select>
      </div>
      <div className="products-list">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
