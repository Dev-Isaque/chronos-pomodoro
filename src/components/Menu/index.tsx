import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from 'lucide-react';
import styles from './styles.module.css';


export function Menu() {
  return <div className={styles.menu}>
    <a className={styles['menu-link']} href="#">
      <HouseIcon />
    </a>
    <a className={styles['menu-link']} href="#">
      <TimerResetIcon />
    </a>
    <a className={styles['menu-link']} href="#">
      <CogIcon />
    </a>
    <a className={styles['menu-link']} href="#">
      <SunIcon />
    </a>
  </div>;
}
