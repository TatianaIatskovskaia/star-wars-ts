import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const Text = ({children}: Props) => {
    return (
        <div className={'text-3xl text-justify leading-normal tracking-widest'}>
            {children}
        </div>
    );
};

export default Text;