import Componente1 from '../components/home/Componente1';
import Componente2 from '../components/home/Componente2';
import Componente3 from '../components/home/Componente3';
import Componente4 from '../components/home/Componente4';
import Componente5 from '../components/home/Componente5';
import Componente6 from '../components/home/Componente6';

const Home = () => {
  return (
    <div className="homepage-grid">
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <Componente4 />
      <Componente5 />
      <Componente6 />
    </div>
  );
};

export default Home;
