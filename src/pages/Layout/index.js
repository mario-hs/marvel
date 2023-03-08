import {
  // Navigate,
  Outlet,
} from "react-router-dom";
import { Header } from "./components/Header";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import styles from "../../assets/css/styles.module.css";
import "../../assets/css/light.module.css";
import "../../assets/css/dark.module.css";
import { useEffect } from "react";
import ApiMarvel from "../../services/ApiMarvel";

const Layout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const apiMarvel = new ApiMarvel();
    apiMarvel.Api("/comics");
  }, []);

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
