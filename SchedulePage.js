import React from 'react';
import { useNavigate } from 'react-router-dom';

function SchedulePage() {
  const navigate = useNavigate();

  const handleSelectService = (service) => {
    // Save the selected service to localStorage
    localStorage.setItem('selectedService', service);
    // Navigate to the form page
    navigate('/form');
  };

  return (
    <div>
      <div className="header">
        <div className="logo">A-Zfix</div>
      </div>
      <div className="services-container">
        <h1>Available Services</h1>
        <table className="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A/C Repair</td>
              <td>Professional A/C repair and maintenance services.</td>
              <td>
                <button onClick={() => handleSelectService('A/C Repair')}>Select</button>
              </td>
            </tr>
            <tr>
              <td>Plumbing Repair</td>
              <td>Expert plumbing services for all your needs.</td>
              <td>
                <button onClick={() => handleSelectService('Plumbing Repair')}>Select</button>
              </td>
            </tr>
            <tr>
              <td>Electrical Repair</td>
              <td>Reliable electrical repair and installation services.</td>
              <td>
                <button onClick={() => handleSelectService('Electrical Repair')}>Select</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SchedulePage;
