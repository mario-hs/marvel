import {
  // Navigate,
  Outlet,
} from "react-router-dom";
import { Header } from "./components/Header";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import styles from "../../assets/css/styles.module.css";
import "../../assets/css/light.module.css";
import "../../assets/css/dark.module.css";
import { UseFetch } from "../../hooks/useFecth/UseFetch";

const Layout = () => {
  const { theme } = useTheme();

  const { error, isPeding } = UseFetch(`/comics`);
  return (
    // <div id={theme} className={styles.container}>
    <div data-theme={theme} className={styles.container}>
      {/* {isAuthenticated() ? ( */}
      <Header />
      {/* <div className="container"> */}
      {isPeding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isPeding && !error && <Outlet />}
      {/* </div> */}
      {/* ) : (
        <Navigate to="/login" />
      )} */}
    </div>
  );
};

export { Layout };
