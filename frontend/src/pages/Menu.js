import React from "react";

function Menu() {
  const items = [
    { name: "Cappuccino", price: "₹150" },
    { name: "Latte", price: "₹160" },
    { name: "Chocolate Cake", price: "₹200" },
    { name: "Croissant", price: "₹120" },
  ];

  return (
    <div className="page">
      <h2>Our Menu</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name} — <strong>{item.price}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
