import Button from "./ui/Button.tsx";


const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center text-center">
            <Button
                className="col-start-3">
                Send me email
            </Button>
        </footer>
    );
};

export default Footer;