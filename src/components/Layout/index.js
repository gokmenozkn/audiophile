import Navbar from '../Navbar';
// import styles from './styles.module.scss';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
