import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  size = "md",
  danger = false,
  stretch = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-theme="light"
      className={buttonStyles({ size, danger, stretch, className })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
