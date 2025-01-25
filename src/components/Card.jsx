const Card = ({ film }) => {
  return (
    <div>
      <img src={film.poster_path} alt="" />
      <div>
        <h2>{film.title}</h2>
        <p>{film.release_date}</p>
        <p>{film.vote_average}</p>
      </div>
      <div>
        <p>Synopsis</p>
        <p>{film.overview}</p>
      </div>
    </div>
  );
};

export default Card;
