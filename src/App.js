import React, { useState } from "react";

function appInput ({})

function App() {
  return (
<div className="App">

    <h1>
      CV Application
    </h1>
    <form>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="education">Education Level:</label>
  <select id="education" name="education" required>
    <option value="">--Please select--</option>
    <option value="high_school">High School</option>
    <option value="associate">Associate's Degree</option>
    <option value="bachelor">Bachelor's Degree</option>
    <option value="master">Master's Degree</option>
    <option value="doctoral">Doctoral Degree (PhD, etc.)</option>
    <option value="other">Other</option>
  </select>

    <legend>Work Experience</legend>

    <label for="company">Company Name:</label>
    <input type="text" id="company" name="company" required />

    <br />

    <label for="position">Position Title:</label>
    <input type="text" id="position" name="position" required />

    <br />

    <label for="responsibilities">Main Responsibilities:</label>
    <textarea id="responsibilities" name="responsibilities" rows="4" required></textarea>

    <br />

    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" name="start_date" required />

    <br />

    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" name="end_date" />
  
  <br />

  <button type="submit">Send</button>
</form>
</form>
    </div>
  );
}



export default App;
