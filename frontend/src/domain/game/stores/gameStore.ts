import { create } from 'zustand';
import type { GameStore, Cell, CellPosition } from '../types';

/**
 * @store gameStore
 * @summary Zustand store for game state management
 * @domain game
 * @type domain-store
 * @category game-data
 * @stateManager zustand
 */
export const useGameStore = create<GameStore>((set, get) => ({
  cells: [],
  currentPlayer: 'X',
  winner: null,
  isGameOver: false,

  initializeBoard: () => {
    const cells: Cell[] = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        cells.push({
          position: { row, col },
          value: 'empty',
          clickable: true,
        });
      }
    }
    set({
      cells,
      currentPlayer: 'X',
      winner: null,
      isGameOver: false,
    });
  },

  makeMove: (position: CellPosition) => {
    const { cells, currentPlayer, isGameOver } = get();
    if (isGameOver) return;

    const cellIndex = position.row * 3 + position.col;
    const cell = cells[cellIndex];

    if (!cell.clickable || cell.value !== 'empty') return;

    const newCells = [...cells];
    newCells[cellIndex] = {
      ...cell,
      value: currentPlayer,
      clickable: false,
    };

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

    set({
      cells: newCells,
      currentPlayer: nextPlayer,
    });
  },

  resetGame: () => {
    get().initializeBoard();
  },
}));
