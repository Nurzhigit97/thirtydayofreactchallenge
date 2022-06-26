import "./NextCountry.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
const NextCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, [setCountries]);

  const lyricsFunction = async () => {
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
    lyricsFunction();
  }, []);

  console.log(countries);
  return (
    <div className="nextCountries">
      <input
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        type="text"
        className="form-control"
        placeholder="Search items..."
      />
      {loading ? (
        <div className="data">
          {countries
            .filter(({ name }) => name.common.toLowerCase().includes(searchKey))
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

export default NextCountry;
