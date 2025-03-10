import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import styles from "./Root.module.scss";

const Root: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
