import { createContext, useState, useContext } from "react";

export const CreateThemeContext = createContext(null)

function ThemeContext({children}) {
    const [theme, setTheme] = useState('app-pure-white')
    return(
        <CreateThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </CreateThemeContext.Provider>
    )
}
export const useThemeContext = () => {
    return useContext(CreateThemeContext)
  }
export default ThemeContext