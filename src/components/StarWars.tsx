import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        <div className={'text-3xl text-justify leading-normal tracking-widest'}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;