import Paragraph from "../Paragraph/Paragraph";
import Search from "../Search/Search";
import Title from "../Title/Title";
import styles from "./MainText.module.css";

function MainText({ title, text }) {
  return (
    <div className={styles["main-text"]}>
      <Title title={title} />
      <Paragraph text={text} />
      <Search />
    </div>
  );
}

export default MainText;
