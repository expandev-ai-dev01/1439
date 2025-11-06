import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import { Board } from '@/domain/game/components/Board';
import { useGameStore } from '@/domain/game/stores/gameStore';
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
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Board, Actions
 */
export const GamePage = (props: GamePageProps) => {
  const navigate = useNavigate();
  const { currentPlayer, resetGame } = useGameStore();

  const handleBackHome = () => {
    navigate('/');
  };

  const handleResetGame = () => {
    resetGame();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jogo da Velha</h1>
          <p className="text-lg text-gray-600">
            Vez do jogador: <span className="font-bold">{currentPlayer}</span>
          </p>
        </div>

        <Board />

        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={handleBackHome}>
            Voltar ao Início
          </Button>
          <Button variant="primary" onClick={handleResetGame}>
            Reiniciar Jogo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
