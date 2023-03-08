import styles from "./styles.modal.module.css";

import { X } from "@phosphor-icons/react";

const Modal = ({ handleModalCallback }) => {
  function handleModal() {
    handleModalCallback();
  }
  return (
    <section className={styles.modal_wrapper}>
      <div className={styles.container_modal}>
        <X
          size={24}
          color="var(--text-modal)"
          onClick={handleModal}
          cursor="pointer"
        />
        <div className={styles.content_modal}>
          <div className={styles.cover_wrapper}>
            <div className={styles.cover}></div>
            <h1>
              VISÃO <br /> GERAL
            </h1>
          </div>
          <article className={styles.info_container}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium vero quod corporis illo sunt officia blanditiis
              cupiditate suscipit eveniet accusantium ab, dolorem eum, velit
              iste ipsa, doloremque illum! Sequi, molestiae!
            </p>
            <ul>
              <li>
                <h2>LANÇAMENTO</h2>
                <span>Mar 07, 2023</span>
              </li>
              <li>
                <h2>LANÇAMENTO</h2>
                <span>Mar 07, 2023</span>
              </li>
              <li>
                <h2>ROTEIRISTAS</h2>
                <span>Joss Whedon</span>
              </li>
              <li>
                <h2>OUTROS</h2>
                <span>Stan Lee</span>
                <span>Jack Kirby</span>
                <span>Zak Penn</span>
              </li>
              <li>
                <h2>PRODUTOR EXECUTIVO</h2>
                <span>Zak Penn</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export { Modal };
