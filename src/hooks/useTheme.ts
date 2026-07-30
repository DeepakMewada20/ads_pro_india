export function useTheme() {
  // TODO: Implement theme convenience wrapper around next-themes
  return {
    theme: "light",
    setTheme: (_theme: string) => {},
    toggleTheme: () => {},
    isDark: false,
  }
}
