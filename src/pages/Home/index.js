import styles from "./styles.home.module.css";

import User from "../../assets/img/user.png";

import { Bell, MagnifyingGlass, Moon, SunDim } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import { Card } from "./components/Card";
import { Modal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFecth/useFetch";
import { useApplicationData } from "../../hooks/contexts/ApplicationDataContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [comicId, setComicId] = useState(null);
  const { comics } = useApplicationData();

  function handleModal(id) {
    setComicId(id);
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      {comics && (
        <>
          <main>
            <section className={styles.nav_top}>
              <div className={styles.search_wrapper}>
                <input type="search" name="" id="" />
                <div>
                  <MagnifyingGlass size={24} weight="duotone" />
                </div>
              </div>
              <div className={styles.rigth_wrapper}>
                <Bell size={22} weight="duotone" />
                {theme === "dark" ? (
                  <SunDim size={24} onClick={toggleTheme} weight="duotone" />
                ) : (
                  <Moon size={24} onClick={toggleTheme} weight="duotone" />
                )}
                <div className={styles.user_wrapper}>
                  <img className={styles.user} src={User} alt="icon user" />
                  <label htmlFor="">Mario Henrique</label>
                </div>
              </div>
            </section>

            <section className={styles.others}>
              <div className={styles.read}>
                <div className={styles.comic_main_wrapper}>
                  <div
                    className={styles.comic_main_background}
                    style={{
                      backgroundImage: `url(${comics[1].thumbnail.path}.${comics[1].thumbnail.extension})`,
                    }}
                  ></div>

                  <div className={styles.comic_main_info}>
                    <div key={comics[1].id}>
                      <p>
                        {comics[1].creators.available > 0
                          ? comics[1].creators.items.map((creator) => {
                              return creator.name + " | ";
                            })
                          : ""}
                      </p>
                      <h1>{comics[1].title}</h1>
                    </div>

                    <button>Ler de novo</button>
                  </div>
                </div>
              </div>

              <div className={styles.reading}>
                <h2>Continue Lendo</h2>
                <div className={styles.reading_wrapper}>
                  <div className={styles.reading_info_background}></div>
                  <div className={styles.reading_info}>
                    <p>{comics[1].title}</p>

                    <button>Continuar lendo</button>
                  </div>
                </div>
              </div>

              <div>
                <h2>Heroís Favoritos</h2>
                <article className={styles.favourites}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </article>
              </div>
            </section>

            <h2>Quadrinhos</h2>
            <section>
              <Card handleModalCallback={handleModal} comics={comics}></Card>
            </section>
          </main>
          {open === false ? (
            <></>
          ) : (
            <Modal handleModalCallback={handleModal} id={comicId} />
          )}
        </>
      )}
    </>
  );
};

export { Home };
