import React, { useState, useEffect } from 'react';

const LocationAutocomplete = ({ label, name, value, onChange, formErrors }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (value.length > 2) {
      fetch(`https://nominatim.openstreetmap.org/search?city=${value}&format=json&addressdetails=1&limit=5`)
        .then((response) => response.json())
        .then((data) => {
          const locations = data.map((item) => ({
            label: item.display_name,
            value: item.display_name,
          }));
          setSuggestions(locations);
        })
        .catch((error) => {
          console.error('Error fetching location data:', error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }, [value]);

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors[name] ? 'border-red-500' : 'border-gray-300'}`}
        value={value}
        onChange={(e) => onChange(e)}
        list={`${name}-suggestions`}
      />
      <datalist id={`${name}-suggestions`}>
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion.value} />
        ))}
      </datalist>
      {formErrors[name] && <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>}
    </div>
  );
};

export default LocationAutocomplete;
