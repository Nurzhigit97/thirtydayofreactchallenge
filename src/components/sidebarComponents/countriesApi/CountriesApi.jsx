import "./CountriesApi.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
const CountriesApi = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState(10000000000);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, [setCountries]);

  const worldCountries = async () => {
    try {
      const data = await axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((res) => {
          console.log(res);
          setCountries(res.data);
        });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    worldCountries();
  }, []);
  console.log(countries);
  return (
    <div className="countriesApi">
      <input
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        type="text"
        className="form-control"
        placeholder="Search items..."
      />
      <select
        className="form-control"
        value={filterType}
        onChange={(e) => {
          setFilterType(e.target.value);
        }}
      >
        <option value="10000000000">All</option>
        <option value="1000">population less then 10000</option>
        <option value="100000">population less then 100000</option>
        <option value="1000000000">population less then 1000000000</option>
      </select>
      {loading ? (
        <div className="countriesItem">
          {countries
            .filter(({ name }) => name.common.toLowerCase().includes(searchKey))
            .filter(({ population }) => population < filterType)
            .map(
              ({ name, flags, capital, languages, population, currencies }) => (
                <div className="blockData">
                  <div className="imgBlock">
                    <img src={flags.png} alt="flags" />
                  </div>
                  <h4 className="text-center">{name.common}</h4>
                  <p>Capital: {capital == null ? "not have" : capital}</p>
                  <p>Надо получить языки из Объекта</p>
                  <p>
                    Population:
                    {population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <p>Currency:{} </p>
                </div>
              )
            )}
        </div>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default CountriesApi;
