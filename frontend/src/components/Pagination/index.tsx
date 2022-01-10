import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="rtamovie-pagination-container">
      <div className="rtamovie-pagination-box">
        <button className="rtamovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="rtamovie-pagination-button" disabled={false}>
          <Arrow className="rtamovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
