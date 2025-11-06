import { clsx } from 'clsx';

export interface BoardVariantProps {
  className?: string;
}

export function getBoardClassName(props: BoardVariantProps): string {
  const { className } = props;

  return clsx(
    'grid grid-cols-3 gap-2',
    'w-full max-w-[450px] aspect-square',
    'md:max-w-[450px]',
    'sm:max-w-[350px]',
    'animate-fadeIn',
    className
  );
}

export function getBoardContainerClassName(): string {
  return clsx(
    'bg-white p-8 rounded-lg shadow-lg',
    'w-full max-w-[500px]',
    'md:max-w-[500px]',
    'sm:max-w-[400px]'
  );
}
