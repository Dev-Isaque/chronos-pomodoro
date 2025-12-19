import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return savedTheme;
  });

  function handleThmeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    console.log(theme);

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    
  }

  /*  useEffect(() => {
    console.log('useEffect sem dependências:', theme);
  }); // Executado toda vez que o componente renderiza na tela */

  /*   useEffect(() => {
    console.log('useEffect com array deps vazio:', theme);
  }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez */

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
    localStorage.setItem('theme', theme);
  }, [theme]); // Executa sempre que a variável 'theme' for alterada

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
