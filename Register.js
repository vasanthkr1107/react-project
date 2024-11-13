import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Optional CSS

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation to ensure all fields are filled
    if (!name || !email || !bloodType || !contact) {
      setError('All fields are required');
      return;
    }

    // Register user (you can store data in localStorage, database, or an API here)
    const donorData = { name, email, bloodType, contact };
    console.log('Donor Registered:', donorData);

    // For demo, redirect to home page after successful registration
    navigate('/home');
  };

  return (
    <section className="register">
      <h2>Register as a Donor</h2>
      {error && <p className="error">{error}</p>} {/* Show error if any */}
      
      <form onSubmit={handleRegister}>
        {/* Name input */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Blood Type input */}
        <select
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
          required
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Contact input */}
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        {/* Register button */}
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
