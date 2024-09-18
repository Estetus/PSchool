import "./index.css";
import "./App.css";
import Button from "./Button/Button";
import Paragraph from "./Paragraph/Paragraph";
import Title from "./Title/Title.jsx";

function App() {
  const data = [
    {
      title: "Поиск",
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];

  return (
    <>
      <Title title={data[0].title}></Title>
      <Paragraph text={data[0].text}></Paragraph>
      <Button></Button>
    </>
  );
}

export default App;
