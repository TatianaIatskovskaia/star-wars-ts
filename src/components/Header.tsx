import Navigation from "./Navigation.tsx";
import {NavContext} from "../utils/context.ts";
import {useContext} from "react";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {name} = useContext(NavContext);

    return (
        <header className='rounded-t-3xl bg-gray'>
            <Navigation/>
            <h1 className='text-center text-4xl py-10'>{characters[name].name}</h1>
        </header>
    );
};

export default Header;