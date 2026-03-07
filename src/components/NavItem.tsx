import Button from "./ui/Button.tsx";

interface NavItemProps {
    itemTitle: string;
    changePage: (page: string) => void;
}

const NavItem = ({itemTitle, changePage}: NavItemProps) => {
    return (
        <Button onClick={() => changePage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;