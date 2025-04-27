import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "appearance-none",
    "flex",
    "items-center",
    "justify-center",
    "cursor-pointer",
    "transition-colors",
    "duration-300",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      danger: {
        true: [
          "bg-danger",
          "text-on-danger",
          "hover:bg-danger-hover",
          "disabled:hover:bg-danger",
        ],
        false: [
          "bg-primary",
          "text-on-primary",
          "hover:bg-primary-hover",
          "disabled:hover:bg-primary",
        ],
      },
      stretch: {
        true: "w-full",
        false: "w-fit",
      },
      size: {
        sm: [
          "px-2",
          "py-1",
          "gap-2",
          "text-sm",
          "[&_svg]:w-4",
          "[&_svg]:h-4",
          "rounded-sm",
        ],
        md: [
          "px-4",
          "py-2",
          "gap-4",
          "text-base",
          "rounded-sm",
          "[&_svg]:w-5",
          "[&_svg]:h-5",
        ],
        lg: [
          "px-6",
          "py-3",
          "gap-6",
          "text-lg",
          "[&_svg]:w-6",
          "[&_svg]:h-6",
          "rounded-lg",
        ],
      },
    },
  }
);
