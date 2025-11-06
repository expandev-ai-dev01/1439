import { getButtonClassName } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary Reusable button component with variants
 * @domain core
 * @type ui-component
 * @category form
 */
export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    type = 'button',
    onClick,
    className,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={getButtonClassName({ variant, size, fullWidth, className })}
    >
      {children}
    </button>
  );
};
