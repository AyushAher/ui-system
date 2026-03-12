// src/button.tsx
import { useEffect } from "react";

// ../tokens/src/colors.ts
var colors = {
  brand: {
    primary: "#4f46e5",
    secondary: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
    information: "#3b82f6",
    success: "#10b981",
    dark: "#111827",
    light: "#f3f4f6"
  },
  neutral: {
    900: "#111827",
    100: "#f3f4f6"
  }
};

// src/button.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  useEffect(() => {
    if (props.variant) {
      const colorValue = colors.brand[props.variant];
      if (colorValue) {
      }
    }
  }, [props.variant]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props
    }
  );
}
export {
  Button
};
