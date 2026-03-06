import {createContext} from "react";
import {navItems} from "./constants.ts";

export interface NavContextProps {
    page: string;
    changePage: (page: string) => void;
}

export const NavContext = createContext({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});