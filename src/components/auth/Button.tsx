import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const baseStyle = "w-full h-14 rounded-xl text-base font-semibold";
  const variantStyle =
    variant === "primary"
      ? "bg-emerald-500 text-white"
      : "bg-white text-emerald-500 border-2 border-emerald-500";

  return (
    <button {...props} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;
