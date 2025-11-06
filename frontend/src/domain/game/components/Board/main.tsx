import { useEffect } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { BoardCell } from '../BoardCell';
import { getBoardClassName, getBoardContainerClassName } from './variants';
import type { BoardProps } from './types';

/**
 * @component Board
 * @summary 3x3 tic-tac-toe game board with interactive cells
 * @domain game
 * @type domain-component
 * @category display
 *
 * @dependencies
 * - useGameStore: Game state management
 * - BoardCell: Individual cell component
 *
 * @state
 * - cells: Array of 9 cells with positions and values
 *
 * @styling
 * - Variants: Responsive sizing for different devices
 * - Responsive: Adapts from 300px (mobile) to 450px (desktop)
 *
 * @accessibility
 * - ARIA: role="grid" for screen readers
 * - Keyboard: Arrow key navigation between cells
 */
export const Board = (props: BoardProps) => {
  const { className } = props;
  const { cells, initializeBoard } = useGameStore();

  useEffect(() => {
    initializeBoard();
  }, [initializeBoard]);

  return (
    <div className={getBoardContainerClassName()}>
      <div
        className={getBoardClassName({ className })}
        role="grid"
        aria-label="Tabuleiro de jogo da velha 3x3"
      >
        {cells.map((cell, index) => (
          <BoardCell key={`${cell.position.row}-${cell.position.col}`} cell={cell} index={index} />
        ))}
      </div>
    </div>
  );
};
