import React from "react";
import image from "../Images/news.png";
import { useContext } from "react";
import { apiContext } from "../context/context";

const Cards = () => {
  const obj = useContext(apiContext);
  const newsData = obj.article;
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {newsData &&
        newsData.map((data) => (
          <div key={data.title}>
            <div className="w-92 h-120 bg-black text-white rounded-2xl">
              {data.urlToImage === null ? (
                <img src={image} className="rounded-t-2xl" alt="..." />
              ) : (
                <img
                  src={data.urlToImage}
                  className="max-h-60 min-w-92 rounded-t-2xl"
                  alt="..."
                />
              )}
              <div className="px-2 h-60 flex flex-col justify-around">
                <h5 className="font-bold h-12 w-full">{data.title.slice(0,90)}...</h5>
                    <p className="h-12 w-full mt-2 mb-5">{data.description.slice(0,100)}...</p>
                <a href={data.url}>
                    <button className="font-semibold bg-blue-500 p-2 text-white !rounded-2xl">
                      Read More
                    </button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
