import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {name} = useContext(NavContext)
    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${name}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    );
};

export default NavItem;