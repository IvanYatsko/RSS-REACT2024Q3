import { Outlet } from 'react-router-dom';
import ThemeButton from '../ThemeButton';
import './layout.css';

const Layout = () => {
  console.log('remix-ssr');
  return (
    <div className="layout">
      <header className="header-style">
        <ThemeButton />
      </header>
      <Outlet />

      <footer>YatskoIvan 2024</footer>
    </div>
  );
};

export default Layout;
