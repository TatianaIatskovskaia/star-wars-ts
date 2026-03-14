import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {NavContextValue} from "./types";

export const NavContext = createContext<NavContextValue>({
    name: defaultHero,
    changeName: (name: string) => console.log(name)
});