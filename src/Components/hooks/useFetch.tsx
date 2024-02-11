import { useState, useEffect } from "react";


export const useFetch = (apiPath:string, queryTerm="") => {
  const [data, setData] = useState([]);
  const REACT_APP_API_KEY="dde6e564297581977e005015195e971b";
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${REACT_APP_API_KEY}&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      setData(json.results);
    }
    fetchMovie();
  }, [url]);

  return { data };
};
