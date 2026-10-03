import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '1.5rem 1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
