import { useState, useEffect } from "react";
import "./Selector.css";

const CountryStateSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    setSelectedState("");
    const selectedCountryData = countries.find(
      (country) => country.country_id === countryId
    );
    setStates(selectedCountryData?.states || []);
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
  };

  return (
    <div className="address">
      <select
        className="select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.country_id} value={country.country_id}>
            {country.country_name}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={selectedState}
        onChange={handleStateChange}
        disabled={!selectedCountry}
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.state_id} value={state.state_id}>
            {state.state_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryStateSelector;
