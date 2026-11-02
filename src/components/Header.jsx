import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../hooks/useCarrinho';
import logoImg from '../assets/mysweetlogo.png';
import styles from './Header.module.css';

function Header() {
  const { quantidadeTotal } = useCarrinho();

  return (
    <header className={styles.header}>
      <Link to="/produtos" className={styles.logoLink} aria-label="My Sweet Laranjinha - produtos">
        <img src={logoImg} alt="My Sweet Laranjinha" className={styles.logo} />
      </Link>
      <nav className={styles.nav} aria-label="Navegação principal">
        <Button component={Link} to="/produtos" variant="text" className={styles.navButton}>
          Produtos
        </Button>
        <Badge badgeContent={quantidadeTotal} color="warning" showZero>
          <Button
            component={Link}
            to="/carrinho"
            variant="contained"
            className={styles.cartButton}
            aria-label={`Carrinho com ${quantidadeTotal} itens`}
          >
            Carrinho
          </Button>
        </Badge>
      </nav>
    </header>
  );
}

export default Header;