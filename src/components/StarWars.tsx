import {starWarsInfo, defaultHero, characters} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {heroId = defaultHero} = useParams();

    return (heroId in characters) ? (
        <Text>
            {starWarsInfo}
        </Text>
    ) : <ErrorPage/>
};

export default StarWars;