import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const colors: {
    brand: {
        primary: string;
        secondary: string;
        warning: string;
        error: string;
        information: string;
        success: string;
        dark: string;
        light: string;
    };
    neutral: {
        900: string;
        100: string;
    };
};

declare const spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** semantic style variant (brand tokens) */
    variant?: keyof typeof colors.brand;
    /** size identifier used to pick from spacing tokens */
    size?: keyof typeof spacing;
}
declare function Button(props: Readonly<ButtonProps>): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
