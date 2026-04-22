import styles from './Navbar.module.css';
import { User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <User size={24} color="#ffffff" fill="#ffffff" />
          </div>
          <span className={styles.logoText}>Style<span className={styles.logoMatch}>Match</span></span>
        </div>
        
        <ul className={styles.navLinks}>
          <li><a href="#" className={styles.active}>Inicio</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a href="#">Cortes</a></li>
          <li><a href="#">Consejos</a></li>
        </ul>
        
        <button className={styles.ctaButton}>
          Comenzar gratis
        </button>
      </div>
    </nav>
  );
}
