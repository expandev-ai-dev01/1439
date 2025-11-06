import { clsx } from 'clsx';
import type { CellValue } from '../../types';

export interface BoardCellVariantProps {
  value: CellValue;
  clickable: boolean;
  isHovered: boolean;
  isFocused: boolean;
  className?: string;
}

export function getBoardCellClassName(props: BoardCellVariantProps): string {
  const { value, clickable, isHovered, isFocused, className } = props;

  return clsx(
    'relative',
    'w-full aspect-square',
    'min-w-[60px] min-h-[60px]',
    'md:min-w-[80px] md:min-h-[80px]',
    'rounded-lg',
    'flex items-center justify-center',
    'text-4xl md:text-5xl font-bold',
    'transition-all duration-200',
    'border-2',
    {
      'bg-gray-100 border-gray-300': value === 'empty',
      'bg-white border-gray-400': value !== 'empty',
      'cursor-pointer hover:bg-gray-200 hover:border-gray-400': clickable && value === 'empty',
      'cursor-not-allowed': !clickable || value !== 'empty',
      'ring-2 ring-primary-500 ring-offset-2': isFocused,
      'bg-gray-200 border-gray-400': isHovered && clickable && value === 'empty',
    },
    className
  );
}

export function getSymbolClassName(value: CellValue): string {
  return clsx('select-none', {
    'text-primary-600': value === 'X',
    'text-secondary-600': value === 'O',
  });
}
