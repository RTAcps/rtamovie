import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="rtamovie-form-container">
      <img
        className="rtamovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="rtamovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="rtamovie-form" onSubmit={handlerSubmit}>
          <div className="form-group rtamovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group rtamovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="rtamovie-form-btn-container">
            <button type="submit" className="btn btn-primary rtamovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-danger rtamovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
