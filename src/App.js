import React, { useState } from "react";


function App() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // State to toggle between Edit and Display mode
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Switch to view mode
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };


  return (
<div className="App">

    <h1>
      CV Application
    </h1>


    {isEditing ? (
        // EDIT MODE
        <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" value={email} onChange={(e => setEmail(e.target.value))} required />

  <label htmlFor="education">Education Level:</label>
          <select
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          >
            <option value="">--Please select--</option>
            <option value="high_school">High School</option>
            <option value="associate">Associate's Degree</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="doctoral">Doctoral Degree (PhD, etc.)</option>
            <option value="other">Other</option>
          </select>

          <legend>Work Experience</legend>

        <label htmlFor="company">Company Name:</label>
        <input
        type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

    <br />

    
    <label htmlFor="position">Position Title:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />

    <br />

      <label htmlFor="responsibilities">Main Responsibilities:</label>
            <textarea
              id="responsibilities"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              rows="4"
              required
            ></textarea>
    <br />

    <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />

    <br />

     <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
  
  <br />

  <button type="submit">Send</button>
</form>
   
  



export default App;
