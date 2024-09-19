import "./Button.css";

function Button({ textBtn, onClick }) {
  return (
    <>
      <button className="search-btn" onClick={onClick}>
        {textBtn}
      </button>
    </>
  );
}

export default Button;
