import "./index.css";
import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import MainText from "./components/MainText/MainText.jsx";
import Body from "./Layout/Body/Body.jsx";
import { UserContextProvider } from "./context/user.context.jsx";

function App() {
  const data = [
    {
      title: "Поиск",
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];

  return (
    <UserContextProvider>
      <Header />
      <MainText title={data[0].title} text={data[0].text} />
      <Body />
    </UserContextProvider>
  );
}

export default App;
