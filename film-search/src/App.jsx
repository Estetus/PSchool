import "./index.css";
import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import MainText from "./Layout/MainText/MainText.jsx";

function App() {
  const data = [
    {
      title: "Поиск",
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];

  return (
    <>
      <Header />
      <MainText title={data[0].title} text={data[0].text} />
    </>
  );
}

export default App;
