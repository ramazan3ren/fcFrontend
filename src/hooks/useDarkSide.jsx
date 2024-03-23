import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const body = window.document.body;
    body.classList.remove(colorTheme);
    body.classList.add(theme);
    localStorage.setItem("theme", theme);

    document.body.className = localStorage.theme;
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
