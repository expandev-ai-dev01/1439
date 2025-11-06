import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import type { GamePageProps } from './types';

/**
 * @page GamePage
 * @summary Main game page with tic-tac-toe board
 * @domain game
 * @type page-component
 * @category game
 *
 * @routing
 * - Path: /game
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const GamePage = (props: GamePageProps) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jogo da Velha</h1>
          <p className="text-lg text-gray-600">
            Vez do jogador: <span className="font-bold">X</span>
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-2 w-80 h-80">
            {Array.from({ length: 9 }).map((_, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-700 transition-colors"
              >
                {/* Cell content will be managed by game logic */}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={handleBackHome}>
            Voltar ao Início
          </Button>
          <Button variant="primary">Reiniciar Jogo</Button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
