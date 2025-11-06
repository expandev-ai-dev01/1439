import { useState, useCallback, useRef, useEffect } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { getBoardCellClassName, getSymbolClassName } from './variants';
import type { BoardCellProps } from './types';

/**
 * @component BoardCell
 * @summary Individual cell in the tic-tac-toe board
 * @domain game
 * @type domain-component
 * @category form
 *
 * @props
 * @param {Cell} cell - Cell data with position and value
 * @param {number} index - Cell index for keyboard navigation
 *
 * @state
 * - isHovered: Hover state for visual feedback
 * - isFocused: Focus state for keyboard navigation
 *
 * @styling
 * - Variants: empty, X, O states with distinct colors
 * - Responsive: Minimum 60x60px (mobile) to 80x80px (desktop)
 *
 * @accessibility
 * - ARIA: role="button", aria-label with position and state
 * - Keyboard: Enter/Space to select, arrow keys to navigate
 * - Screen Reader: Announces cell position and current value
 */
export const BoardCell = (props: BoardCellProps) => {
  const { cell, index, className } = props;
  const { makeMove } = useGameStore();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    if (cell.clickable && cell.value === 'empty') {
      makeMove(cell.position);
    }
  }, [cell.clickable, cell.value, cell.position, makeMove]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      } else if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        const currentIndex = index;
        let nextIndex = currentIndex;

        switch (e.key) {
          case 'ArrowUp':
            nextIndex = currentIndex - 3;
            break;
          case 'ArrowDown':
            nextIndex = currentIndex + 3;
            break;
          case 'ArrowLeft':
            nextIndex = currentIndex - 1;
            break;
          case 'ArrowRight':
            nextIndex = currentIndex + 1;
            break;
        }

        if (nextIndex >= 0 && nextIndex < 9) {
          const nextCell = document.querySelector(
            `[data-cell-index="${nextIndex}"]`
          ) as HTMLButtonElement;
          nextCell?.focus();
        }
      }
    },
    [handleClick, index]
  );

  const ariaLabel = `Célula linha ${cell.position.row + 1}, coluna ${cell.position.col + 1}. ${
    cell.value === 'empty' ? 'Vazia' : `Marcada com ${cell.value}`
  }`;

  return (
    <button
      ref={cellRef}
      type="button"
      role="button"
      aria-label={ariaLabel}
      data-cell-index={index}
      disabled={!cell.clickable || cell.value !== 'empty'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={getBoardCellClassName({
        value: cell.value,
        clickable: cell.clickable,
        isHovered,
        isFocused,
        className,
      })}
    >
      {cell.value !== 'empty' && (
        <span className={getSymbolClassName(cell.value)} aria-hidden="true">
          {cell.value}
        </span>
      )}
    </button>
  );
};
