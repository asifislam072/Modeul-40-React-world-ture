import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";
import CountryVisited from "./CountryVisited";

export default function Countries() {
  const [countris, setcountris] = useState([]);
  const [visitedCountrys, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountris(data));
  }, []);

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };

  const handleVisitedCountry = (copurtryDetails) => {
    const newVisitedCounty=[...visitedCountrys,copurtryDetails]
 
    setVisitedCountry(newVisitedCounty)
  };
console.log(visitedCountrys)
  return (
    <div>
      <h3>Countris {countris.length}</h3>
      <div>
        <h3>visited country : {visitedCountrys.length}</h3>
        <div>
            {
                visitedCountrys.map(country=><CountryVisited country={country}></CountryVisited>)
            }
        </div>
      </div>
      <div>
        <h5>Visited Countris</h5>
        <ul></ul>
      </div>

      <div style={grid}>
        {countris.map((cuntri) => (
          <Countrie
            country={cuntri}
            key={cuntri.cca3}
            handleVisitedCountry={handleVisitedCountry}
          ></Countrie>
        ))}
      </div>
    </div>
  );
}
