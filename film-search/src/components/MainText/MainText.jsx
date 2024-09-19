import Paragraph from "../Paragraph/Paragraph";
import Search from "../Search/Search";
import Title from "../Title/Title";
import "./MainText.css";

function MainText({ title, text }) {
  return (
    <div className="main-text">
      <Title title={title} />
      <Paragraph text={text} />
      <Search />
    </div>
  );
}

export default MainText;
