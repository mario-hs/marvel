import styles from "./styles.card.module.css";

import ImgNotFound from "../../../../assets/img/img-not-found.jpg";

const Card = ({ handleModalCallback, comics }) => {
  function handleModal() {
    handleModalCallback();
  }

  return (
    <ul className={styles.cards_comics}>
      {comics.map((comic) => {
        return (
          <li
            className={styles.comics_wrapper}
            key={comic.id}
            onClick={handleModal}
          >
            <img
              src={
                comic.thumbnail.path.includes("image_not_available")
                  ? ImgNotFound
                  : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              }
              alt={"comic " + comic.title}
            />
            <p>{comic.title} </p>
            <span>
              {comic.creators.items.length > 0
                ? comic.creators.items[0].name
                : ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export { Card };
