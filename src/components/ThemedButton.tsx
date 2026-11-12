import { type ButtonHTMLAttributes } from 'react';
import { type WithThemeProps } from '../types';

interface ThemedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, WithThemeProps {
    label: string;
}

export default function ThemedButton({ theme, label, className = '', ...rest }: ThemedButtonProps) {
    return (
        <button
            className={`themed-btn theme-${theme} ${className}`.trim()}
            {...rest}
        >
            {label}
        </button>
    );
}
