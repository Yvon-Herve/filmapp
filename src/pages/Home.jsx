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
    <div>
      <Header />
      <ul>
        {data.map((film, index) => (
          <Card key={index} film={film} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
