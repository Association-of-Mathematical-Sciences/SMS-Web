const STORAGE_KEY = "theme";
const root = document.documentElement;

const getTheme = () => {
    const saved = localStorage?.getItem(STORAGE_KEY) ?? "";
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const syncButton = (theme) => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const lightIcon = document.getElementById("themeIconLight");
    const darkIcon = document.getElementById("themeIconDark");

    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");

    if (lightIcon && darkIcon) {
        lightIcon.classList.toggle("hidden", theme === "dark");
        darkIcon.classList.toggle("hidden", theme !== "dark");
    }
};

const applyTheme = (theme) => {
    root.classList.toggle("dark", theme === "dark");
    localStorage?.setItem(STORAGE_KEY, theme);
    syncButton(theme);
};

const initThemeToggle = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn || btn.dataset.bound === "true") return; // avoids double-binding
    btn.dataset.bound = "true";

    applyTheme(getTheme());

    btn.addEventListener("click", () => {
        const next = root.classList.contains("dark") ? "light" : "dark";
        applyTheme(next);
    });
};

initThemeToggle();
