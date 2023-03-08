import styles from "./styles.card.module.css";

import Comic1 from "../../assets/capa1.jpeg";
import Comic2 from "../../assets/capa2.jpg";
import Comic3 from "../../assets/capa3.jpg";
import Comic4 from "../../assets/capa4.jpg";
import Comic5 from "../../assets/capa5.jpg";
import { Modal } from "../Modal";

const Card = ({ handleModalCallback }) => {
  function handleModal() {
    handleModalCallback();
  }

  return (
    <>
      <article className={styles.comics_wrapper}>
        <img src={Comic1} alt="comic 1" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>

      <article className={styles.comics_wrapper}>
        <img src={Comic2} alt="comic 2" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>

      <article className={styles.comics_wrapper}>
        <img src={Comic3} alt="comic 3" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>

      <article className={styles.comics_wrapper}>
        <img src={Comic4} alt="comic 4" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>

      <article className={styles.comics_wrapper}>
        <img src={Comic5} alt="comic 5" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>

      <article className={styles.comics_wrapper} onClick={handleModal}>
        <img src={Comic4} alt="comic 4" />
        <p>Lorem ipsum dolor sit amet </p>
        <span>Lorem ipsum</span>
      </article>
    </>
  );
};

export { Card };
