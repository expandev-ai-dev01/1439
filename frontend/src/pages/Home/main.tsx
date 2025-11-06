import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page with game introduction and start button
 * @domain core
 * @type page-component
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const HomePage = (props: HomePageProps) => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-900">Jogo da Velha</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Um jogo clássico onde dois jogadores se alternam marcando X e O em uma matriz 3x3. Vença
          completando uma linha, coluna ou diagonal!
        </p>
        <Button variant="primary" size="lg" onClick={handleStartGame}>
          Iniciar Jogo
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
