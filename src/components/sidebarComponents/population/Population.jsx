import { useState, useEffect } from "react";

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://countries-cities.p.rapidapi.com/location/country/list",
  headers: {
    "X-RapidAPI-Key": "aea8a46533mshf3704de697f68dbp1f23bajsn10671cf5265d",
    "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {})
  .catch(function (error) {
    console.error(error);
  });
const Population = () => {
  let [data, setData] = useState([]);

  return <div>{data}</div>;
};

export default Population;
