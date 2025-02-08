import { createContext, useState } from "react";

export const levelContext = createContext();

export const LevelProvider = ({ children }) => {
    const [level, setLevel] = useState(localStorage.getItem('level') || '');
    const [search, setSearch] = useState('');
    
    return (
        <levelContext.Provider value={{ level, setLevel, search, setSearch}}>
            { children }
        </levelContext.Provider>
    );
};