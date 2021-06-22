import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useEffect } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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

    2: {
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

    3: {
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
  });

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

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
