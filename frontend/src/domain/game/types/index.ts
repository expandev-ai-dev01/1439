export type CellValue = 'empty' | 'X' | 'O';

export interface CellPosition {
  row: number;
  col: number;
}

export interface Cell {
  position: CellPosition;
  value: CellValue;
  clickable: boolean;
}

export interface BoardState {
  cells: Cell[];
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | 'draw' | null;
  isGameOver: boolean;
}

export interface GameStore extends BoardState {
  initializeBoard: () => void;
  makeMove: (position: CellPosition) => void;
  resetGame: () => void;
}
