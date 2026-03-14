import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";


const Hero = () => {
    const {name} = useContext(NavContext);

    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[name].img} alt={characters[name].name}/>
        </section>
    );
};

export default Hero;