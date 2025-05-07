import Home from "../pages/Home";

const Card = ({ film }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFind = () => {
    let genrArray = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genrArray.push("Action");
          break;
        case 12:
          genrArray.push("Aventure");
          break;
        case 16:
          genrArray.push("Animation");
          break;
        case 35:
          genrArray.push("Comedie");
          break;
        case 80:
          genrArray.push("Policier");
          break;
        case 99:
          genrArray.push("Documentaire");
          break;
        case 18:
          genrArray.push("Drame");
          break;
        case 10751:
          genrArray.push("Famille");
          break;
        case 14:
          genrArray.push("Fantasy");
          break;
        case 36:
          genrArray.push("Histoire");
          break;
        case 27:
          genrArray.push("Horreur");
          break;
        case 10402:
          genrArray.push("Musique");
          break;
        case 9648:
          genrArray.push("Mystere");
          break;
        case 10749:
          genrArray.push("Romance");
          break;
        case 878:
          genrArray.push("Science-fiction");
          break;
        case 10770:
          genrArray.push("Telefilm");
          break;
        case 53:
          genrArray.push("Thriller");
          break;
        case 10752:
          genrArray.push("Guerre");
          break;
        case 37:
          genrArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genrArray.map((genre) => (
      <li className=" bg-blue-950 rounded-[5px] m-1" key={genre}>
        {genre}
      </li>
    ));
  };
  const addStorage = () => {
    let storedData = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];
    if (!storedData.includes(film.id.toString())) {
      storedData.push(film.id);
      window.localStorage.films = storedData;
    }
  };
  return (
    <div className="flex flex-col bg-slate-900 text-white rounded-xl relative">
      <img
        className="h-78 w-56 mx-auto object-cover rounded-3xl overflow-hidden py-4 "
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
      />
      <div className="m-2 space-y-2">
        <h2 className="font-bold">{film.title}</h2>
        <p className="text-sm text-gray-500/75">
          Sortie le {dateFormater(film.release_date)}
        </p>
        <p>{film.vote_average} ⭐</p>

        <ul className="flex justify-start">
          {film.genre_ids ? genreFind() : null}
        </ul>

        <p className="font-bold">Synopsis</p>
        <p className=" text-sm text-gray-500/75 text-justify">
          {film.overview}
        </p>
        <div
          onClick={() => addStorage()}
          className="bg-blue-300 flex justify-center w-40 mx-auto rounded-3xl p-2 mt-2 absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="bg-blue-300 flex justify-center w-40 mx-auto rounded-3xl p-2 mt-2 absolute"> */}
          Ajouter aux favoris
        </div>
      </div>
    </div>
  );
};

export default Card;
