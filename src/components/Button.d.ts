import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
