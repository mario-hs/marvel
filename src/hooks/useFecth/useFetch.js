import { useEffect, useState } from "react";
import api from "../../services/ApiMarvel";
import { useApplicationData } from "../contexts/ApplicationDataContext";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const { handleData } = useApplicationData();

  const [isPeding, setIsPeding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      api
        .get(url)
        .then((res) => {
          if (res.status !== 200) {
            throw Error("Não foi possível buscar os dados para esse recurso");
          }
          switch (url) {
            case "/comics":
              handleData(res.data.data);
              break;
            case `/comics/${url.match(/[0-9]+/gm)}`:
              setData(res.data.data.results);
              break;
          }

          setIsPeding(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Requisão abortada");
          } else {
            setError(err.message);
            setIsPeding(false);
          }
        });

      return () => abortCont.abort();
    }, 1000);
  }, [url]);

  return { data, isPeding, error };
};

export { UseFetch };
