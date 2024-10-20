import React, { useState } from 'react';

function FormPage() {
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (address && date && time) {
      // Save the booking details in localStorage or handle the submission
      localStorage.setItem('address', address);
      localStorage.setItem('date', date);
      localStorage.setItem('time', time);
      alert('Your service has been booked!');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div>
      <div className="header">
        <div className="logo">A-Zfix</div>
      </div>
      <div className="form-container">
        <h2 className="form-title">Schedule Your Service</h2>

        <div className="form-group">
          <label htmlFor="address">Enter your address</label>
          <input
            type="text"
            id="address"
            placeholder="1234 Main St, City, Country"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Select a date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Select a time of day</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="" disabled>
              Select Time
            </option>
            <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FormPage;
