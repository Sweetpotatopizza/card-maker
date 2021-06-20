import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useEffect } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "annie",
      company: "Tapas",
      theme: "dark",
      title: "FrontEnd Programmer",
      email: "none@gmail.com",
      message: "go for it",
      fileName: "annie",
      fileURL: null,
    },

    {
      id: 2,
      name: "annie",
      company: "Tapas",
      theme: "light",
      title: "FrontEnd Programmer",
      email: "none@gmail.com",
      message: "go for it",
      fileName: "annie",
      fileURL: "",
    },

    {
      id: 3,
      name: "annie",
      company: "Tapas",
      theme: "colorful",
      title: "FrontEnd Programmer",
      email: "none@gmail.com",
      message: "go for it",
      fileName: "annie",
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    console.log(card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
