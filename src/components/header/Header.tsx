import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import { navLinks } from "../../data";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        {navLinks.map(({ path, text }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "" : "text-muted")}
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
