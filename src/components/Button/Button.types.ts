interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  danger?: boolean;
  stretch?: boolean;
}

export type { ButtonProps };
