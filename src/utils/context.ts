import {createContext} from "react";

export interface NavContextProps {
    page: string;
    changePage: (page: string) => void;
}

export const NavContext = createContext<NavContextProps | undefined>(undefined);