import { useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  
  useEffect(() => {
    // Set initial theme based on system preference if not already set
    if (!theme && systemTheme) {
      setTheme(systemTheme);
    }
  }, [theme, systemTheme, setTheme]);

  return {
    theme,
    setTheme,
    systemTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
};
