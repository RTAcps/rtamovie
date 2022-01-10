import MovieStars from "../MovieStars";
import "./styles.css";

function MovieScore() {
  const score = 3.5;
  const count = 13;

  return (
    <div className="rtamovie-score-container">
      <p className="rtamovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="rtamovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
