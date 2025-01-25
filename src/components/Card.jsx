const Card = ({ film }) => {
  return (
    <div className="flex flex-col bg-slate-900 text-white rounded-xl ">
      <img
        className="h-78 w-56 mx-auto object-cover rounded-3xl overflow-hidden py-4 "
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
      />
      <div className="m-2 space-y-2">
        <h2 className="font-bold">{film.title}</h2>
        <p className="text-sm text-gray-500/75">
          Sortie le {film.release_date}
        </p>
        <p>{film.vote_average}</p>

        <p className="font-bold">Synopsis</p>
        <p className=" text-sm text-gray-500/75 text-justify">
          {film.overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
