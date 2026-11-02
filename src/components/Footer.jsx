import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>My Sweet Laranjinha</p>
      <small className={styles.credito}>
        Desenvolvido por{' '}
        <a
          href="https://github.com/thailacodes"
          target="_blank"
          rel="noreferrer"
          title="Perfil de Thaila Campoy no GitHub"
        >
          Thaila Campoy 🍊
        </a>
      </small>
    </footer>
  );
}

export default Footer;