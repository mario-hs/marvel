import { Link } from "react-router-dom";
import { BookmarksSimple, GearSix, House } from "@phosphor-icons/react";
import LogoBig from "../../../../assets/img/logo-marvel-big.svg";
import LogoSmall from "../../../../assets/img/logo-marvel-small.svg";
import styles from "./styles.header.module.css";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  function handleClick(e) {
    setActive(e);
  }

  return (
    <header>
      <img
        className={`${styles.icon_marvel} ${styles.big}`}
        src={LogoBig}
        alt="icon marvel"
      />
      <img
        className={`${styles.icon_marvel} ${styles.small}`}
        src={LogoSmall}
        alt="icon marvel"
      />
      <nav>
        <div className={styles.nav_top}>
          <div
            className={`${active === "home" ? styles.active : ""} ${
              styles.nav_button
            }`}
          >
            <Link onClick={() => handleClick("home")}>
              <House size={24} color="var(--text-secondary)" weight="duotone" />
              <span>Página Inicial</span>
            </Link>
          </div>
          <div
            className={`${active === "favourite" ? styles.active : ""} ${
              styles.nav_button
            }`}
          >
            <Link onClick={() => handleClick("favourite")}>
              <BookmarksSimple size={24} weight="duotone" />
              <span>Favoritos</span>
            </Link>
          </div>
        </div>
        <div
          className={`${active === "settings" ? styles.active : ""} ${
            styles.nav_button
          }`}
        >
          <Link onClick={() => handleClick("settings")}>
            <GearSix size={24} weight="duotone" />
            <span>Configuração</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
