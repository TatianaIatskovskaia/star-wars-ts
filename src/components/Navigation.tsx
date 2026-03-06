import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constants.ts";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";

const Navigation = () => {
    const {changePage} = useContext(NavContext);
    return (
        <nav className="fixed top-2 left-12 flex gap-4">
            {navItems.map(navItem => <NavItem changePage={changePage} key={navItem} itemTitle={navItem}/>)}
        </nav>
    );
};

export default Navigation;