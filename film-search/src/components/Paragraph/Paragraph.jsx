import styles from "./Paragraph.module.css";

function Paragraph({ text }) {
  return (
    <>
      <p className={styles["paragrapgh-main"]}>{text}</p>
    </>
  );
}

export default Paragraph;
