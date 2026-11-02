import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <div className="conteudo-principal">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;