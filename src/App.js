import { useState } from "react";

var countries = {
  India: ["Delhi", "Kerala", "Karnataka"],
  USA: ["Washington", "Chickago", "NewYork"],
  Canada: ["Ottawa", "Toronto", "Scarborough"],
};

function App() {
  var [country, setCountry] = useState("");
  var [city, setCity] = useState("");

  function handleCountry(e) {
    setCountry(e.target.value);
    setCity("");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <select value={country} onChange={handleCountry}>
        {Object.keys(countries).map((c) => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </select>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {country &&
          countries[country].map((c) => {
            return (
              <option value={c} key={c}>
                {c}
              </option>
            );
          })}
      </select>
      <h3>Result</h3>
      {country && city && (
        <>
          Selected - {country} -{city}
        </>
      )}
    </div>
  );
}

export default App;
