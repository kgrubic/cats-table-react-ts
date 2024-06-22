import { useEffect, useState } from "react";
import { TypeDog } from "../pages/Row/CatsRow";

export const FetchHook = (url: string) => {
  const [data, setData] = useState<TypeDog[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
