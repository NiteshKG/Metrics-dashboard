
import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => (
  <div className="mb-3">
    <label>{label}</label>
    <select className="form-control" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
