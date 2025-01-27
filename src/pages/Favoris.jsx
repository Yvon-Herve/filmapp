import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Favoris = () => {
  const [listData, setListData] = useState([]);

  const fetchData = async () => {
    let filmArray = [];
    let filmIds = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];

    if (filmIds.length > 0) {
      try {
        for (let filmId of filmIds) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${filmId}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
          );
          filmArray.push(res.data);
        }
        setListData(filmArray);
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      <h2>Favoris</h2>
      <div>
        <ul>
          {listData.length > 0 ? (
            listData.map((film, index) => <Card key={index} film={film} />)
          ) : (
            <h2>Aucun favoris pour le moment</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Favoris;
