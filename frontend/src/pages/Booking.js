import React, { useState } from "react";

function Booking() {
  const [form, setForm] = useState({ name: "", email: "", workshopType: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Booking submitted successfully!");
    setForm({ name: "", email: "", workshopType: "" });
  };

  return (
    <div className="page">
      <h2>Book a Workshop</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          name="workshopType"
          value={form.workshopType}
          onChange={handleChange}
          required
        >
          <option value="">Select Workshop</option>
          <option value="Painting">Painting</option>
          <option value="Music">Music</option>
          <option value="Singing">Singing</option>
        </select>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default Booking;
