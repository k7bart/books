import { Link } from "react-router-dom";
import styles from "./NavigateLink.module.scss";

interface NavigateLinkProps {
  text: string;
  to: string;
}

const NavigateLink = ({ text, to }: NavigateLinkProps) => {
  return (
    <Link className={styles.link} to={to}>
      {text}
    </Link>
  );
};

export default NavigateLink;
