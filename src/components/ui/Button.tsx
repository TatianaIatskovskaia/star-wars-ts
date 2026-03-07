import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({children, onClick, className}: Props) => {
    return (
        <div
            className={`bg-danger border rounded-md px-3 cursor-pointer hover:bg-amber-950 hover:text-amber-200 ${className} ?? ''`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;