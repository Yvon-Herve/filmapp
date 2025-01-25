import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);

  const fecthData = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      );
      setData(res.data.results);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    fecthData();
  }, []);
  return (
    <div className="bg-slate-700">
      <Header />
      <div>
        <ul className="mx-auto my-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
          {data.map((film, index) => (
            <Card key={index} film={film} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
