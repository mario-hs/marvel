import { useEffect } from "react";
import {
  // Navigate,
  Outlet,
} from "react-router-dom";
import { Header } from "../components/Header";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../global/styles.module.css";
import light from "../global/light.module.css";
import dark from "../global/dark.module.css";

const Layout = () => {
  const { theme } = useTheme();

  return (
    // <div id={theme} className={styles.container}>
    <div data-theme={theme} className={styles.container}>
      {/* {isAuthenticated() ? ( */}
      <Header />
      {/* <div className="container"> */}
      <Outlet />
      {/* </div> */}
      {/* ) : (
        <Navigate to="/login" />
      )} */}
    </div>
  );
};

export { Layout };
