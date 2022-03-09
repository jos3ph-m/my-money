import { Link } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
