import React, { useState, useEffect, useRef } from "react";

import styles from "./styles.card.module.css";

import ImgNotFound2 from "../../../../assets/img/img-not-found-2.jpg";
import { useApplicationData } from "../../../../hooks/contexts/ApplicationDataContext";
import api from "../../../../services/ApiMarvel";

const Card = ({ handleModalCallback }) => {
  const { handleData, comics } = useApplicationData();
  const [loadPage, setLoadPage] = useState(0);
  // const [hasEndingPosts, setHasEndingPosts] = useState(false);

  const loaderRef = useRef(null);

  function handleModal(comicId) {
    handleModalCallback(comicId);
  }

  async function handleResquest() {
    if (loadPage !== 0) {
      const { data } = await api.get("/comics", {
        params: {
          offset: comics.length,
        },
      });
      if (!data.data.results.length) {
        return;
      }
      handleData(data.data);
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setLoadPage((old) => old + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() => {
    handleResquest();
  }, [loadPage]);

  return (
    <>
      <ul className={styles.cards_comics}>
        {comics.map((comic, index) => {
          return (
            <li
              className={styles.comics_wrapper}
              key={comic.id + Math.random()}
              onClick={() => handleModal(comic.id)}
            >
              <img
                src={
                  comic.thumbnail.path.includes("image_not_available")
                    ? ImgNotFound2
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
        {/* {isLoading && <p>Loading...</p>} */}
      </ul>
      {<div ref={loaderRef} className={styles.loading}></div>}
    </>
  );
};

export { Card };
