import "./Card.css";

function Card({ title, img, rating }) {
  return (
    <div className="card-film">
      <img className="card-img" src={img} alt="Постер" />
      <p className="card-title">{title}</p>
      <span className="card-rating">
        <img className="card-icon" src="./star.svg" alt="" />
        {rating}
      </span>
      <p className="card-like">
        <img className="card-img_like" src="./like.svg" alt="" />В избранное
      </p>
    </div>
  );
}

export default Card;
