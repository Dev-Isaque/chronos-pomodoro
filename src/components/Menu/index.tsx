import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThmeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    console.log(theme);

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    document.documentElement.setAttribute('data-theme', theme);
  }
  return (
    <div className={styles.menu}>
      <h1>{theme}</h1>

      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Home'
        title='Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Reset'
        title='Reset'
      >
        <TimerResetIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Settings'
        title='Settings'
      >
        <CogIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Theme'
        title='Theme'
        onClick={event => handleThmeChange(event)}
      >
        <SunIcon />
      </a>
    </div>
  );
}
