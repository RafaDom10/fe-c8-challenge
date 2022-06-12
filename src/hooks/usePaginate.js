import { useState, useEffect } from "react"

export const usePaginate = (url, query) => {

  const [data, setData] = useState({
    results: [],
    page: 0,
    nextPage: 0,
    prevPage: 0,
  });

  useEffect(() => {
    fetch(`${url}${query}`)
      .then(res => res.json())
      .then(({ results, page }) => {
        setData({
          results,
          page,
          nextPage: page + 1,
          prevPage: page - 1
        })
      })

  }, [query, url]);

  return data;
}