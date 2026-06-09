import React, { useState } from "react";
import { useContext } from "react";
import { apiContext } from "../context/context";

const Navbar = () => {
  
  const obj = useContext(apiContext);
 
  const dataFetchAccordingToCategory = async(category) => {
       const apiData =  await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${obj.APIkey}`);
       const data = await apiData.json();
       obj.setArticle(data.articles);
  }

  return (
    <div>
      <nav className="p-2 bg-dark">
        <div className="flex items-center">
          <a className="text-white" href="/">
            <h2>
              <span className="font-bold rounded-2xl text-2xl p-2 bg-light text-dark">NewsMag</span>
            </h2>
          </a>
          <div>
            <ul className="flex gap-x-4 text-white mt-3">
              <li>
                <a
                  className="!no-underline text-white cursor-pointer"
                  onClick = {()=>dataFetchAccordingToCategory("technology")}
                >
                  Technology
                </a>
              </li>
              <li>
                <a className="!no-underline text-white cursor-pointer"onClick = {()=>dataFetchAccordingToCategory("business")}>
                  Business
                </a>
              </li>
              <li>
                <a className="!no-underline text-white cursor-pointer" onClick = {()=>dataFetchAccordingToCategory("health")}>
                  Health
                </a>
              </li>
              <li>
                <a className="!no-underline text-white cursor-pointer" onClick = {()=>dataFetchAccordingToCategory("science")}>
                  Science
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
