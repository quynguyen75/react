import React, { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [status, setStatus] = useState("initial");
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus("loading");
        const response = await fetch(url, options);
        if (response.ok) {
          setResult(await response.json());
          setStatus("success");
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    fetchData();
  }, [url, options]);

  return [status, result];
}
