import styles from "./styles.modal.module.css";
import ImgNotFound from "../../assets/img/img-not-found.jpg";

import { X } from "@phosphor-icons/react";
import { useFetch } from "../../hooks/useFecth/useFetch";

const Modal = ({ handleModalCallback, id }) => {
  const { data: comic, error, isPeding } = useFetch(`/comics/${id}`);

  function handleModal() {
    handleModalCallback();
  }

  return (
    <section className={styles.modal_wrapper}>
      {isPeding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {comic &&
        comic.map((element) => {
          const newDate = new Date(element.dates[0].date.toString());
          const launchDate = `${newDate.getDate()}/${
            newDate.getMonth() + 1
          }/${newDate.getFullYear()}`;

          const url = element.thumbnail.path.includes("image_not_available")
            ? ImgNotFound
            : `${element.thumbnail.path}.${element.thumbnail.extension}`;

          return (
            <div className={styles.container_modal} key={"modal" + element.id}>
              <X
                size={24}
                color="var(--text-modal)"
                onClick={handleModal}
                cursor="pointer"
              />
              <div className={styles.content_modal}>
                <div className={styles.cover_wrapper}>
                  <div
                    className={styles.cover}
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  ></div>
                  <h1>
                    VISÃO <br /> GERAL
                  </h1>
                </div>
                <article className={styles.info_container}>
                  <p>
                    {element.description !== ""
                      ? element.description
                      : "Not description"}
                  </p>
                  <ul>
                    <li>
                      <h2>TITULO</h2>
                      <span>{element.title}</span>
                    </li>
                    <li>
                      <h2>LANÇAMENTO</h2>
                      <span>{launchDate}</span>
                    </li>
                    <li>
                      <h2>ESCRITOR</h2>
                      <span>
                        {element.available > 0
                          ? element.creators.items[1].name
                          : "-"}
                      </span>
                    </li>
                    <li>
                      <h2>DESENHISTA</h2>
                      <span>
                        {element.available > 0
                          ? element.creators.items[0].name
                          : "-"}
                      </span>
                    </li>
                    <li>
                      <h2>ARTISTA DA CAPA</h2>
                      <span>
                        {element.available > 0
                          ? element.creators.items[0].name
                          : "-"}
                      </span>
                    </li>
                  </ul>
                  <button className={styles.read}>Ler agora</button>
                </article>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export { Modal };
