import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fecthData = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR"
        // `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      );
      setData(res.data.results);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    fecthData();
  }, [search]);
  return (
    <div className="bg-slate-700">
      <div className="w-1/4 text-white">
        <Navigation />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-3xl p-2">Movie App</h1>
        <div className="flex-1 flex flex-col py-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white text-black p-2 rounded-t-lg"
            type="text"
          />
          <button className="bg-blue-600 rounded-b-lg font-bold p-2">
            Rechercher
          </button>
        </div>
      </div>
      <div className="pt-4">
        <ul className="mx-auto my-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {data
            .filter((titlefilm) =>
              titlefilm.title.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 12)
            .map((film, index) => (
              <Card key={index} film={film} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
