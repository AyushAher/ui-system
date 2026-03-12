import React, { useEffect } from "react";
import { colors, spacing } from "@aerovia/tokens";

// additional styling helpers that derive from tokens
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** semantic style variant (brand tokens) */
  variant?: keyof typeof colors.brand;
  /** size identifier used to pick from spacing tokens */
  size?: keyof typeof spacing;
}

export function Button(props: Readonly<ButtonProps>) {
  useEffect(() => {
    if (props.variant) {
      const colorValue = colors.brand[props.variant];
      if (colorValue) {
      }
    }
  }, [props.variant]);
  return (
    <button
      {...(props as React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >)}
    />
  );
}
