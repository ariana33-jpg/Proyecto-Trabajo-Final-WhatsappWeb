
import { createContext, useEffect, useState } from "react";



const ThemeContext = createContext()

const THEME_STORAGE_KEY = 'wa-theme'

function getInitialTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    return saved === 'light' ? 'light' : 'dark'
}


function ThemeContextProvider ({children}){
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, theme)
    }, [theme])

    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const provider_values = {
        theme: theme,
        setTheme: setTheme,
        toggleTheme: toggleTheme
    }
    return (
        <ThemeContext.Provider
            value={provider_values}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
