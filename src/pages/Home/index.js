import styles from "./styles.home.module.css";

import User from "../../assets/img/user.png";

// import BackgroundComic from "../../assets/reading.jpg";

import { Bell, MagnifyingGlass, Moon, SunDim } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import { Card } from "./components/Card";
import { Modal } from "../../components/Modal";
import { useState } from "react";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  function handleModal() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
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
              <div className={styles.comic_main_background}></div>

              <div className={styles.comic_main_info}>
                <div>
                  <p>Mark Miller | Steve McNiven</p>
                  <h1>
                    Os vingadores <br /> Guerra Civil
                  </h1>
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
                <p>Peter Parker: O espetacular homem-aranha &#35;309</p>

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
        <section className={styles.cards_comics}>
          <Card handleModalCallback={handleModal}></Card>
        </section>
      </main>
      {open === false ? <></> : <Modal handleModalCallback={handleModal} />}
    </>
  );
};

export { Home };
