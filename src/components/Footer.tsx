import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {navItems} from "../utils/constants.ts";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";


const Footer = () => {
    const {name} = useContext(NavContext)
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center text-center">
            <NavLink className="col-start-3" to={`${navItems[3].toLowerCase()}/${name}`}>
                <Button>
                    Send me email
                </Button>
            </NavLink>
        </footer>
    );
};

export default Footer;