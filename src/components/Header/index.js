import { Link } from "react-router-dom";
import { BookmarksSimple, GearSix, House } from "@phosphor-icons/react";
import LogoBig from "../../assets/logo-marvel-big.svg";
import LogoSmall from "../../assets/logo-marvel-small.svg";
import styles from "./styles.header.module.css";

const Header = () => {
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
          <div className={`${styles.active} ${styles.nav_button}`}>
            <Link>
              <House size={24} color="var(--text-secondary)" weight="duotone" />
              <span>Página Inicial</span>
            </Link>
          </div>
          <div className={styles.nav_button}>
            <Link>
              <BookmarksSimple size={24} weight="duotone" />
              <span>Favoritos</span>
            </Link>
          </div>
        </div>
        <div className={styles.nav_button}>
          <Link>
            <GearSix size={24} weight="duotone" />
            <span>Configuração</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
