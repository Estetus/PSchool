import "./index.css";
import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import MainText from "./components/MainText/MainText.jsx";
import Body from "./Layout/Body/Body.jsx";
import { useLocalStorage } from "./components/hooks/user-localStorage.hook.js";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useLocalStorage("data", []);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    if (users && users.length > 0) {
      const user = users.find((user) => user.isLogined);
      setLoggedUser(user || null);
    }
  }, [users]);

  const handleLogin = (name) => {
    const newUser = {
      name,
      isLogined: true,
    };
    const updatedUsers = users.map((user) => ({
      ...user,
      isLogined: false,
    }));
    
    setUsers([...updatedUsers, newUser]);
    setLoggedUser(newUser);
  };

  const handleLogout = () => {
    const updatedUsers = users.map((user) => ({ ...user, isLogined: false }));
    setUsers(updatedUsers);
    setLoggedUser(null);
  };

  const data = [
    {
      title: "Поиск",
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];

  return (
    <>
      <Header loggedUser={loggedUser} onLogout={handleLogout} />
      <MainText title={data[0].title} text={data[0].text} />
      <Body onLogin={handleLogin} />
    </>
  );
}

export default App;
