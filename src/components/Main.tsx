import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";
import {navItems} from "../utils/constants.ts";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";


const Main = () => {
    const {page} = useContext(NavContext);
    switch (page) {
        case navItems[0]:
            return <Home/>;
        case navItems[1]:
            return <AboutMe/>;
        case navItems[3]:
            return <Contact/>;
        case navItems[2]:
            return <StarWars/>;
        default:
            return <Home/>;
    }
};

export default Main;