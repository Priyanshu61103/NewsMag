import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { apiContext } from "./context/context";

const App = () => {
  const APIkey = `${import.meta.env.VITE_API_KEY}`;
  console.log(import.meta.env.VITE_API_KEY);
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const dataFetchingFromAPI = async () => {
      const apiData = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIkey}`
      );
      const data = await apiData.json();
      setArticle(data.articles);
    };

    dataFetchingFromAPI();
  }, []);

  return (
    <apiContext.Provider value={{APIkey , article , setArticle}}>
      <div>
        <Navbar/>
        <h2 className="font-bold flex justify-center my-2 gap-x-2 text-center">
          Latest <span className="h-8 flex items-center bg-red-800 p-1 rounded-lg mt-1 text-white">News</span>
        </h2>
        <Cards/>
      </div>
    </apiContext.Provider>
  );
};

export default App;
