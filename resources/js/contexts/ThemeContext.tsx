import React, {
    FC,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface themes {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

//const ThemeContext = createContext<themes | undefined>(undefined);

const defaultThemeContext: themes = {
    theme: "dark", // default value
    toggleTheme: () => console.warn("toggleTheme function not provided"),
};

const ThemeContext = createContext<themes>(defaultThemeContext);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    console.log(theme);

    const toggleTheme = () => {
        console.log("babu");
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });

        console.log("asif");
    };

    useEffect(() => {
        console.log("fbbb");
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        )
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
                console.log("usman");
            } else {
                document.documentElement.classList.remove("dark");
                console.log("ariz");
            }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);
